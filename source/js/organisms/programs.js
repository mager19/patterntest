$(document).ready(function() {
  $('.programs .tabs a').click(function(e) {
    e.preventDefault();
    var section;

    section = $(this).attr('id');

	if( $(this).hasClass('active-tab') ) {
	   $(this).removeClass('active-tab');
       $('.links .' + section).removeClass('active');
       $('.images .' + section).removeClass('active');
	} else {
	 	$('.programs .tabs a').removeClass('active-tab');
    	$('.links .box').removeClass('active');
    	$('.images img').removeClass('active');

		 $(this).addClass('active-tab');
    	$('.links .' + section).addClass('active');
    	$('.images .' + section).addClass('active');
	}

  });

  $('.programs .section .title').click(function(e) {
    e.preventDefault();
    if ($(this).parent().children('.box').hasClass('active')) {
      $(this).removeClass('active');
      $(this).parent().children('.box').removeClass('active');
    }
    else {
      $('.links .box').removeClass('active');
      $('.links .title').removeClass('active');
      $(this).addClass('active');
      $(this).parent().children('.box').addClass('active');
    }
  });

  $('.widget-call-button .boton-icono').click(function(e) {
    e.preventDefault();
    if ($('.widget-call-button section#contactarme').hasClass('active')) {
      $('.widget-call-button section#contactarme').removeClass('active');
    }
    else {
      $('.widget-call-button section#contactarme').addClass('active');
    }
  });

  $('.add-calendar-wrapper #open-calendar-popup').click(function(e) {
    e.preventDefault();
    $(this).parent().find('.popup').toggleClass('active');
  });
  $('.add-calendar-wrapper .popup a').click(function(e) {
    $(this).parent().removeClass('active');
  });
  $('.add-calendar-wrapper .popup button').click(function(event) {
    $(this).parent().removeClass('active');
  });
});
