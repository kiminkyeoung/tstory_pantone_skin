(function ($) {
    /*mobile nav collapse*/
    $(".mobile-btn a").click(function () {
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
            $(".nav").removeClass("on");
        } else {
            $(this).addClass("on");
            $(".nav").addClass("on");
        }
    });
})(jQuery);
