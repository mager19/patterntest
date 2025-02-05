$(document).ready(function() {

$(window).scroll(function(){

	var wScroll = $(this).scrollTop();


    $('.parallax-titulo-1').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    $('.parallax-titulo-2').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    $('.parallax-img2').css({
      'transform' : 'translate(0px, -'+ wScroll /20 +'%)'
    });

    $('.parallax-img1').css({
      'transform' : 'translate(0px, -'+ wScroll /35 +'%)'
    });

  });

});