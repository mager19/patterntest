$(document).ready(function() {

  $('.carousel-tabs .carousel').carousel({
    interval: 5000
  });

  // $('#carousel-text').html($('#slide-content-0').html());
  //Handles the carousel thumbnails
  $('.carousel-tabs .hide-bullets .thumbnail').click( function(){
    var id = parseInt(this.id.substr(this.id.lastIndexOf("-") + 1));
    $(this).parents('#carrusel-principal').find('.carousel').carousel(id);
    $(this).siblings().andSelf().removeClass('active');
    $(this).addClass('active');
    console.log(id, $(this).parents('#carrusel-principal'));
  });

  // When the carousel slides, auto update the text
  $('.carousel-tabs .carousel').on('slid.bs.carousel', function (e) {
    var  id = $(this).find('.item.active').data('slide-number');
    // $('#carousel-text').html($('#slide-content-'+id).html());
    $(this).parents('#carrusel-principal').find('.hide-bullets .thumbnail').removeClass('active');
    $('#' + this.id + '-selector-' + id).addClass('active');
  });

});
