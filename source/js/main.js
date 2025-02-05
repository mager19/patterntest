$(document).ready(function () {
  // TODO: poner esto en el organismo/molecula del single.
  // ---------------------------------------------------------
  //  IR ARRIBA
  // ---------------------------------------------------------

  //vamos al principio o al final de la página
  $('a.arriba').click(function (e) {
    e.preventDefault();
    volver = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(volver).offset().top
    }, 2000);
  });

  // TODO: verificar esto donde se usa
  // ---------------------------------------------------------
  // Clase para listas de botones destacados de 4 u 8 únicamente
  // ---------------------------------------------------------
  if ($('.botones-destacados').children().length == 4 ||
    $('.botones-destacados').children().length == 8) {
    $('.botones-destacados').addClass("ancho4");
  }
  else {
    $('.botones-destacados').removeClass("ancho4");
  }

  const stickyMenu = document.getElementById("uexternado__institutional__stickyMenu");

  function throttle(func) {
    var lastCall = 0;
    var scheduled = false;

    return function () {
      var now = Date.now(); // Cambié a Date.now() porque es más compatible con ES5
      var args = arguments; // Capturamos los argumentos para poder pasarlos más tarde

      if (scheduled) return;

      if (now - lastCall >= 300) {
        lastCall = now;
        func.apply(this, args); // Usamos apply para pasar el contexto y los argumentos
      } else {
        scheduled = true;
        requestAnimationFrame(function () {
          lastCall = Date.now();
          scheduled = false;
          func.apply(this, args); // Usamos apply aquí también para el contexto y los argumentos
        });
      }
    };
  }

  function checkSticky() {
    if (window.pageYOffset > 60) {
      stickyMenu.classList.add("sticky__menu__institutional");
    } else {
      stickyMenu.classList.remove("sticky__menu__institutional");
    }
  }

  window.addEventListener("scroll", throttle(checkSticky), {
    passive: true
  });

  // aside template 3
  var elementoFijo = document.querySelector('.aside__template3');

  if (elementoFijo) {
    var ajustarPosicion = function () {
      var scrollPos = window.scrollY + window.innerHeight;
      var documentHeight = document.documentElement.scrollHeight;
      var distanciaAlFinal = documentHeight - scrollPos;

      if (distanciaAlFinal <= 800) {
        // Si estamos a 800px o menos del final
        elementoFijo.style.position = 'absolute';
        elementoFijo.style.bottom = '0'; // Queda 800px del final
        elementoFijo.style.top = 'auto';
      } else {
        // Volver a posición fija si estamos lejos del final
        elementoFijo.style.position = 'fixed';
        elementoFijo.style.bottom = 'auto';
        elementoFijo.style.top = '17%'; // Ajusta este valor según necesites
      }
    };

    window.addEventListener('scroll', ajustarPosicion);
    ajustarPosicion();
  }
});