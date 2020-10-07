$(function () {
    $(".question__inner").css("display", "none");
    
    $(".question__outer").click(function () {
        $(this).siblings().slideToggle();
        let step = 180;
        let el = $(this).find(".question__img");
        let d = el.data("angle") + step;
        el.css("transform", "rotate(+" + d + "deg)");
        if (d >= 360) d -= 360;
        el.data("angle", d);
    });

    $(".header__menu").mobileMenu({
        menuIconClassName: ".menu__icon",
        mobileResolution: 768,
        menuType: "sticky",
        offsetToSticky: 50,
        closeIconClassName: ".close-menu-icon"
    });
    
    $(".footer__menu").mobileMenu({
        menuIconClassName: ".menu__icon",
        mobileResolution: 1,
        menuType: "custom",
        offsetToSticky: 50,
        closeIconClassName: ".close-menu-icon"
    });

    var swiper = new Swiper('.swiper-hero', {
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
    
    var swiper = new Swiper('.swiper-reviews', {
        autoHeight: true,
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
