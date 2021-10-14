$(function() {
    var bodyElm = $('body');
    var windowHeight = $(window).height()
    var scrollPosi = $("body").scrollTop();
    $(".hero").height(windowHeight)

    $(window).resize(function () {
        var windowHeight = $(window).height();
        $(".hero").height(windowHeight);
    });
    $(".header__menu").click(function(){
       $("body").toggleClass("active__menu");
       $(".header__line:nth-child(2)").fadeToggle();
       $(".header__text").fadeToggle();
       $(".menu").fadeToggle();
       $(".header__line:nth-child(1)").toggleClass("header__line-active01")
       $(".header__line:nth-child(3)").toggleClass("header__line-active03");
    })
   
      $(window).scroll(function() {
        var scroll = $(this).scrollTop();
    if (scroll >= windowHeight){
      $(".header").css("background-color","#21054d")
      $(".toTop").css("display","block")
    } else {
        $(".header").css("background-color","transparent")
        $(".toTop").css("display","none")
    }
    });
    $(".toTop").click(function(){
        $('html, body').animate({scrollTop:0});
    })
});
