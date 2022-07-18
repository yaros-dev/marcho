$(function () {
  
  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.star').rateYo({
    starWidth: "17px",
    ratedFill: "#ffc35b",
    normalFill: "#ccccce",
    readOnly: true,
    
  });


})