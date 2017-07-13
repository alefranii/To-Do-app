
var agregar = 45;

init();

function init() {
   $(".fa-plus").css({
      "-webkit-transform": "rotate(" + agregar + "deg)",
      "-moz-transform": "rotate(" + agregar + "deg)",
      "-ms-transform": "rotate(" + agregar + "deg)",
      "-o-transform": "rotate(" + agregar + "deg)",
      "transform": "rotate(" + agregar + "deg)",
      "transition": "0.2s linear"
   });
   agregar += 45;
}

// marcar detalles haciendo click
$("ul").on("click", "li", function() {
   $(this).toggleClass("completed");
});

// Click X para borrar
$("ul").on("click", "span", function(e) {
   $(this).parent().fadeOut(500, function() {
      $(this).remove();
   });
   e.stopPropagation();
});

$("input[type='text']").on("keypress", function(e) {
   if(e.which === 13) {
      // para agregar text
      var agregarTexto = $(this).val();
      $(this).val("");
      
      $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + agregarTexto + "</li>");
   }
});

$(".fa-plus").on("click", function() {
   if(agregar === 135) {
      agregar = 45;
   }
   $(this).css({
      "-webkit-transform": "rotate(" + agregar + "deg)",
      "-moz-transform": "rotate(" + agregar + "deg)",
      "-ms-transform": "rotate(" + agregar + "deg)",
      "-o-transform": "rotate(" + agregar + "deg)",
      "transform": "rotate(" + agregar + "deg)",
      "transition": "0.2s linear"
   });
   agregar += 45;
   $("input[type='text']").fadeToggle();
});