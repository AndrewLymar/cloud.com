$(function () {
    $(".question__inner").css("display", "none");
    $(".question__outer").click(function () {
        $(this).siblings().slideToggle();
    });

    $("nav").mobileMenu({
        menuIconClassName: ".menu__icon",
        mobileResolution: 768,
        menuType: "sticky",
        offsetToSticky: 50,
        closeIconClassName: ".close-menu-icon"
    });

    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        loop: {
            loop: 'true'
        },
        autoplay: {
            delay: 4000,
        },
    });

});
