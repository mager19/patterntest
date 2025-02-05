$(document).ready(function () {
  $('.modulo-video').click(function (e) {
    //Disable link click before initializing gallery
    e.preventDefault();
  })
  var $lg = $('.modulo-video')
  $lg.lightGallery();
});