$(document).ready(function() {
  //---------------------------------------------------------
  // Slider Principal Bootstrap
  //---------------------------------------------------------
  $('#carruselPantallaCompleta').carousel({
    interval: false
  });

  $('#carousel-text').html($('#slide-content-0').html());
  //Handles the carousel thumbnails
  $('[id^=carousel-selector-]').click( function(){
    var id = this.id.substr(this.id.lastIndexOf("-") + 1);
    var id = parseInt(id);
    $('#carruselPantallaCompleta').carousel(id);
  });

  // When the carousel slides, auto update the text
  $('#carruselPantallaCompleta').on('slid.bs.carousel', function (e) {
    var id = $('.item.active').data('slide-number');
    $('#carousel-text').html($('#slide-content-'+id).html());
    $('.hide-bullets .thumbnail').removeClass('active');
    $('#carousel-selector-' + id).addClass('active');
  });

  // Agregar clase al thumb activo
  $('#carrusel-thumbs a').on('click', function(){
    $('.hide-bullets .thumbnail').removeClass('active');
    $(this).addClass('active');
  });
});