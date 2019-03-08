

$(function () {
    initPages();

    Environment.moveTo($('.bigCloud'), -0.3, null, 10000);
    Environment.moveTo($('.smallCloud'), 1, null, 20000);
    Environment.moveTo($('.sun'), 0, 0.1, 40000);


    Boy.walkTo(0.52, null, 5000) //5000
        .then(function () {
            Environment.moveTo($('.bird'), 0, 0, 20000);
            return Environment.scrollBackground(-1, 6000) //6000
        })
        .then(function () {
            Environment.openDoor();
            return Boy.enterToShop();
        })
        .then(function () {
            Environment.closeDoor();
            Boy.takeFlowers();
            return Boy.outOfShop();
        })
        .then(function () {
            Boy.walkTo(0.15, null, 6000);
            return Environment.scrollBackground(-2, 6000); //6000
        })
        .then(function () {
            return Boy.walkToGirl();
        })
        .then(function () {
            Boy.stopAnimation();
            Boy.turnAround();
            // $("#boy").addClass('boyStand');

            setInterval(function () {
                Environment.fallFlower();
            }, 200);

            setTimeout(function () {
                Boy.startAnimation();
                Girl.turnAround();
            }, 1000);
        });

});

/**
 * 初始化所有页面
 */
function initPages() {
    const content = $("#content");
    const contentWrap = content.find(".content-wrap");

    const pages = contentWrap.find('li');
    const pageWidth = content.width();
    contentWrap.css('width', pages.length * pageWidth);

    $.each(pages, function (index) {
        const page = pages.eq(index);
        page.css('width', pageWidth);
    });
}


