$(document).ready(function () {
  // ---------------------------------------------------------
  // Slick slider responsive (home)
  // ---------------------------------------------------------

  $('.carrusel-relacionadas').on('init', function () {
    $('.carrusel-relacionadas').css({ visibility: 'visible' }); // Make carrusel visible
    $(window).scroll(); // Simian: Force Lazyload plugin to trigger when slick is initialized
  });

  $('.carrusel-interno-1columna').on('init', function () {
    $('.carrusel-interno-1columna').css({ visibility: 'visible' }); // Make carrusel visible
    $(window).scroll(); // Simian: Force Lazyload plugin to trigger when slick is initialized
  });

  $('.carrusel-relacionadas').slick({
    autoplay: false,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  // ---------------------------------------------------------
  // Slick slider Widget
  // ---------------------------------------------------------
  $('.widget-carrusel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplay: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  // ---------------------------------------------------------
  // Carrusel de 3 columnas
  // ---------------------------------------------------------
  $('.carrusel-interno-3columnas').slick({
    autoplay: false,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // ---------------------------------------------------------
  // Carrusel de 2 columnas
  // ---------------------------------------------------------

  $('.carrusel-interno-2columnas').slick({
    autoplay: false,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // ---------------------------------------------------------
  // Carrusel buscador programas home
  // ---------------------------------------------------------

  $('.carrusel-programas').slick({
    autoplay: false,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // ---------------------------------------------------------
  // Carrusel links relacionados para programas o facultades
  // ---------------------------------------------------------

  $('.carrusel-links-relacionados').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // ---------------------------------------------------------
  // Carrusel de 1 columna - Nuevo home eventos
  // ---------------------------------------------------------

  $('.carrusel-interno-1columna').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    useAutoplayToggleButton: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // ---------------------------------------------------------
  // Carrusel de 3 columnas
  // ---------------------------------------------------------
  $('.carrusel-iconos').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    useAutoplayToggleButton: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $('.carrusel-responsive-3col').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          autoplay: true,
          slidesToShow: 3,
          slidesToScroll: 6,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          slidesToShow: 2,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 580,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 340,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
