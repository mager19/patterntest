$(document).ready(function() {
	$('.modulo-acordeon.filtro .boton-icono').click(function(e){
	  e.preventDefault();
	  $('.modulo-acordeon.filtro .filter-tablist').toggleClass('active');
	  $('.modulo-acordeon.filtro .boton-icono').toggleClass('active-filters');
	});

  $('.fondo-transparente').click(function() {
    $('.modulo-acordeon.filtro .filter-tablist').removeClass('active');
    $('.modulo-acordeon.filtro .boton-icono').removeClass('active-filters');
  });
});