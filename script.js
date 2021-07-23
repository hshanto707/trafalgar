// $(document).ready(function(){
//   $("#testimonial-slider").owlCarousel({
//       items:1,
//       itemsDesktop:[1000,1],
//       itemsDesktopSmall:[979,1],
//       itemsTablet:[767,1],
//       pagination:false,
//       navigation:true,
//       navigationText:["",""],
//       slideSpeed:500,
//       autoPlay:false
//   });
// });



$(document).ready(function(){
  $("#testimonial-slider").owlCarousel({
      items:1,
      itemsDesktop:[1000,1],
      itemsDesktopSmall:[979,1],
      itemsTablet:[768,1],
      pagination:false,
      navigation:true,
      navigationText:["",""],
      autoPlay:true
  });
});