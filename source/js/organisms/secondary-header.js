$(document).ready(function(){
  // ---------------------------------------------------------
  // Activar menu responsive (facultades)
  // ---------------------------------------------------------
  $('.secondary-header-menu .menu').slicknav({
      prependTo:'#responsive-secondary-menu'
  });
  if(screen.width < 640){
    
    $("#responsive-secondary-menu .slicknav_menu ul li.menu-item-has-children").each(function() {
      var li = $(this);
      var a = li.find("a.slicknav_item.slicknav_row:first > a:first");

      a.prependTo(a.closest("li")).addClass("item-haschild");
      li.find("a.slicknav_item.slicknav_row:first").remove();

      li.find("a.item-haschild:first > span").insertAfter(li.find("a.item-haschild:first"));
      li.children("span").addClass("slicknav_item slicknav_row");
    });

  } 

  if(screen.width < 640){      
    $("#responsive-secondary-menu .slicknav_menu li.menu-item-has-children").each(function() {
      var li = $(this);
      var a = li.find("a.slicknav_item.slicknav_row:first > a:first");
  
      a.prependTo(a.closest("li")).addClass("item-haschild");
      li.find("a.slicknav_item.slicknav_row:first").remove();
  
      li.find("a.item-haschild:first > span").insertAfter(li.find("a.item-haschild:first"));
      li.children("span").addClass("slicknav_item slicknav_row");
    });  
  }

  $('.secondary-header-menu .menu-secundario .menu-item-has-children').each( function(index, element){
    $(this).find('> a').wrapInner('<div class="menu-link"></div>');
  });

  $('.show-secondary-menu').click(function() {
    $('.secondary-header-menu .menu').slicknav('toggle');
    $('.show-secondary-menu').toggleClass('active');
    $('#responsive-secondary-menu').toggleClass('active'); // This is only used with the sub-sites
    if ( $('#responsive-secondary-menu .slicknav_btn').length ) { //Remove this invisible element if it exists
      $('#responsive-secondary-menu .slicknav_btn').remove();
    }
  });
});
