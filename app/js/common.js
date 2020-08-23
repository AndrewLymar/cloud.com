$(function () {
    $(".question__inner").css("display", "none");
    $(".question__outer").click(function () {
        $(this).siblings().slideToggle();
    });
});
