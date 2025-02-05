$(document).ready(function() {

	$('#fotografias .galleria a').click(function(e){
		//Disable link click before initializing gallery
		e.preventDefault()
	})
	var $lg = $('#fotografias .galleria')
	$lg.lightGallery();

  $('.wp-block-gallery').lightGallery({
    selector: 'a'
  });

});