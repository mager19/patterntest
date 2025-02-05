$(document).ready(function(){
  var active;
  var link = $('aside.tabs-news > nav.tab > a');
  var tab = $('aside.tabs-news > .news');
  var opts = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
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
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  link.click(function (e) {
    e.preventDefault();
    link.removeClass('active');
    active.slick('unslick');
    tab.removeClass('active');
    active = $($(this).addClass('active').attr('tab'))
      .addClass('active')
      .slick(opts);
  });

  active = $(tab[0])
    .addClass('active')
    .slick(opts);

  $(link[0]).addClass('active');
});