$(document).ready(function() {
  $('.tabs-vertical .tabs a').click(function(e) {
    e.preventDefault();
    var section;

    section = $(this).attr('id');

	if( $(this).hasClass('active-tab') ) {
	   $(this).removeClass('active-tab');
       $('.links .' + section).removeClass('active');
       $('.images .' + section).removeClass('active');
	} else {
	 	$('.tabs-vertical .tabs a').removeClass('active-tab');
    	$('.links .box').removeClass('active');
    	$('.images img').removeClass('active');

		 $(this).addClass('active-tab');
    	$('.links .' + section).addClass('active');
    	$('.images .' + section).addClass('active');
	}

  });

  $('.tabs-vertical .section .title').click(function(e) {
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
});