$(document).ready(function(){
  // ---------------------------------------------------------
  // Activar menu responsive (home)
  // ---------------------------------------------------------
  $('#menu .menu').slicknav({
      prependTo:'#responsive-menu'
  });
  if(screen.width < 640){
    jQuery("#responsive-menu .menu-menu-principal-container ul li.menu-item-has-children").each(function() {
      var li = jQuery(this);
      var a = li.find("a.slicknav_item.slicknav_row:first > a:first");

      a.prependTo(a.closest("li")).addClass("item-haschild");
      li.find("a.slicknav_item.slicknav_row:first").remove();

      li.find("a.item-haschild:first > span").insertAfter(li.find("a.item-haschild:first"));
      li.children("span").addClass("slicknav_item slicknav_row");
    });

  } 
});