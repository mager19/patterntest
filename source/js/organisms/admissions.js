$(document).ready(function() {
  $('.admissions .tabs a').click(function(e) {
    e.preventDefault();
    var section;

    section = $(this).attr('id');

    $('.admissions .tabs a').removeClass('active-tab');
    $('.links .box').removeClass('active');
    $('.images img').removeClass('active');

    $(this).addClass('active-tab');
    $('.links .' + section).addClass('active');
    $('.images .' + section).addClass('active');
  });

  $('.admissions .section .title').click(function(e) {
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