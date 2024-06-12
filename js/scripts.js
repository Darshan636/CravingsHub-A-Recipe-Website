jQuery(document).ready(function () {
  $('#testislider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      draggable: true,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 8000,

      responsive: [{
          breakpoint: 767,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplaySpeed: 8000,
              adaptiveHeight: true,
              dots: true,
              arrows: false
          }
      }
      ]
  });

});