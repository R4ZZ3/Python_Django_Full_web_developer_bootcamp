// KEY PRESS

// $("input").eq(0).keypress(function(){
//   if (event.which === 13) {
//     $("h3").toggleClass("turnBlue");
//   }
// });

// $("h1").on("mouseenter", function(){
//   $(this).toggleClass("turnBlue");
// });

$("input").eq(1).on("click",function(){
  $(".container").slideUp(3000);
});
