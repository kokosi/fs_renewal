/*
 2016-02-07
 Gtrix
 WebDev Part_CYJ
 */

$(document).ready(function (e) {
    
    /////상단메뉴영역
    //PC
    $('#headerWrap').mouseover(function () {
        $('.gnbWrap').css('overflow','visible');
    });

    $('#headerWrap').mouseleave(function () {
        $('.gnbWrap').css('overflow','hidden');
    });
    //MOBILE
    $('.menuBtn').click(function () {
        $('.menu').toggle();

        $('.menu01').click(function () {
            $(this).next('.subMenuList').toggle();
        });

        return false;
    });

    

    //라인업확인
    $('.lineupState').on('click', function(e) {
        e.preventDefault();
        $('.popWrap').show();
    });

    $('.popWrap .lineupPop .close').on('click', function(e) {
        e.preventDefault();
        $('.popWrap').hide();
    });

    //faq toggle
    $(".faqList > dt").click(function(){

        $(this).next("dd").toggle();
        $("i", this).toggleClass("fa-chevron-up fa-chevron-down");
        $(this).parent("dl").siblings().children("dd").hide();

        return false;
    });

    /*slick*/
    //banner
    $('.slideWrap').slick({
        dots:true,
        autoplay: true,
        autoplaySpeed: 3000
    });
    //판스프리뷰
    $('.fsPreSlide').slick({
        dots:true
    });
    //신규카드(3개)
    $('.newCardSlide').slick({
        dots:true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    //미디어
    $('.mediaSlide').slick({
        dots:true
    });

});