$(document).ready(function() {
$("#slider").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  infinite: true,
  variableWidth: true,
  dots: false,
  speed: 500,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        adaptiveHeight:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
});