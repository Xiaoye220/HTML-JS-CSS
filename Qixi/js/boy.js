
const Boy = {
    transition: function (options, time) {
        const dtd = $.Deferred();
        $("#boy").transition(options, time, 'linear', function () {
            dtd.resolve();
        });
        return dtd;
    },
    stopAnimation: function () {
        $("#boy").css("-webkit-animation-play-state", "paused");
    },
    startAnimation: function () {
        $("#boy").css("-webkit-animation-play-state", "running");
    },
    walkTo: function (percentX, percentY, time) {
        const content = $("#content");

        const translateX = percentX * content.width();
        const translateY = percentY * content.height();
        return this.transition({
            transform: 'translate(' + translateX + 'px, ' + translateY + 'px)'
        }, time);
    },
    enterToShop: function () {
        const door = $(".door");
        const boy = $("#boy");
        const translateX = boy.offset().left;
        const doorCenterY = door.offset().top + door.height() / 2;
        const boyCenterY = boy.offset().top + boy.height() / 2;
        const translateY = doorCenterY - boyCenterY;

        return this.transition({
            opacity: 0,
            transform: 'translate(' + translateX + 'px, ' + translateY + 'px), scale(0.6, 0.6)'
        }, 2000);
    },
    outOfShop: function () {
        const translateX = $("#boy").offset().left;
        return this.transition({
            opacity: 1,
            transform: 'translateX(' + translateX + 'px), scale(1, 1)'
        }, 2000);
    },
    takeFlowers: function () {
        $("#boy").css('-webkit-animation-name', 'boyWalkWithFlower');
    },
    walkToGirl: function(){
        return Boy.walkTo(0.30, -0.12, 1000)
            .then(function () {
                // 获取 boy 的位置
                const content = $("#content");
                const translateX = 0.50 * content.width() - $("#girl").width() + 20;
                const translateY = -0.12 * content.height();

                return Boy.transition({
                    transform: 'translate(' + translateX + 'px, ' + translateY + 'px)'
                }, 1000);
            });
    },
    turnAround: function () {
        $("#boy").css({
            '-webkit-animation-name': 'boyTurnAround',
            '-webkit-animation-iteration-count': '1',
            '-webkit-animation-fill-mode': 'forwards',
            '-webkit-animation-duration': '500ms'
    });
    }
};
