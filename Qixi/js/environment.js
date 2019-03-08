

const Environment = {
    /**
     * 物体移动
     * @param container 节点容器
     * @param xPercent
     * @param yPercent
     * @param time
     */
    moveTo: function (container, xPercent, yPercent, time) {
        const width = $("#content").width();
        let transitionX = xPercent == null ? container.position().left : width * xPercent;
        let transitionY = yPercent == null ? container.position().top : width * yPercent;

        container.css({
            'transition-duration': time + 'ms',
            'transition-timing-function': 'linear',
            'left': transitionX,
            'top': transitionY,
            // 'transform': 'translate(' + transitionX + 'px, ' + transitionY + 'px)'
        });
    },

    /**
     * 滚动背景
     * @param percent 百分比，往左为负，往右为正，一个页面为 1
     * @param time 滚动时间 ms
     */
    scrollBackground: function(percent, time) {
        // JQuery Promise
        const dtd = $.Deferred();
        const content = $("#content");
        const contentWrap = content.find(".content-wrap");

        const translateX = percent * content.width();

        contentWrap.transition({
                transform: 'translateX(' + translateX + 'px)'
            }, time, 'linear', function () {
                dtd.resolve();
            }
        );
        return dtd;
    },
    /*
    开门
     */
    openDoor:function () {
        $(".b_background").css('background-image', 'url("../images/background/b_background_bright.png")');
        $(".leftDoor").transition({
            left: '-50%'
        }, 2000, 'linear');

        $(".rightDoor").transition({
            left: '100%'
        }, 2000, 'linear');
    },
    /*
    关门
     */
    closeDoor: function () {
        $(".leftDoor").transition({
            left: '0'
        }, 2000, 'linear', function () {
            $(".b_background").css('background-image', 'url("../images/background/b_background_dark.png")');
        });

        $(".rightDoor").transition({
            left: '50%'
        }, 2000, 'linear');
    },
    /**
     * 落花
     */
    fallFlower: function () {
        const content = $("#content");
        const urlIndex = Math.floor(Math.random() * 6) + 1;
        const startLeft = Math.random() * content.width();
        const startOpacity = Math.random() + 0.75;
        const endLeft = startLeft + (Math.random() * 2 - 1) * 300;
        const duration = 7000 + Math.random() * 5000;
        const sky = $(".sky");

        let flower = $("<div></div>").css({
            'backgroundImage': 'url(../images/snowflake/snowflake' + urlIndex + '.png)',
            'left': startLeft,
            'opacity': startOpacity
        }).addClass("fallFlower");

        sky.append(flower);

        flower.transition({
            'top': content.height(),
            'left': endLeft,
        },duration, 'ease-out', function () {
            $(this).remove();
        });
    }
};
