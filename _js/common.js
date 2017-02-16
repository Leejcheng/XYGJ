$(function(){
    $(".nav li").click(function() {
        $(this).addClass('nav_cur2').siblings().removeClass('nav_cur2');
    });
})