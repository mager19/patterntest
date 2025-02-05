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

  if (stickyMenu) {
    function throttle(func) {
      var lastCall = 0;
      var scheduled = false;

      return function () {
        var now = Date.now();
        var args = arguments;

        if (scheduled) return;

        if (now - lastCall >= 300) {
          lastCall = now;
          func.apply(this, args);
        } else {
          scheduled = true;
          requestAnimationFrame(function () {
            lastCall = Date.now();
            scheduled = false;
            func.apply(this, args);
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
      passive: true,
    });
  }
});