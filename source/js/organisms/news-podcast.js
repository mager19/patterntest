$(document).ready(function(){
  // ---------------------------------------------------------
  // Activar carrusel responsive (home derecho carta)
  // ---------------------------------------------------------
   if(window.innerWidth<1000){
     var element1 = document.getElementById("podcast-news");
     element1.classList.remove("grilla-portal-2cols");
     element1.classList.add("carrusel-responsive-3col");
  
  };
});