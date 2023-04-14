var helpers = {
  addZeros: function (n) {
    return n < 10 ? "0" + n : "" + n;
  },
};

function sliderInit() {
  var $slider = $(".center");
  $slider.each(function () {
    var $sliderParent = $(this).parent();
    $(this).slick({
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      nextArrow: ".arr__next",
      prevArrow: ".arr__prev",
      // variableWidth: true,
      // adaptiveHeight: true
    });
    // $(this).slick({
    //   centerMode: true,
    //   centerPadding: "60px",
    //   slidesToShow: 1,
    //   autoplay: true,
    //   autoplaySpeed: 2500,
    //   // variableWidth: true,
    //   slidesToScroll: 1,
    //   responsive: [
    //     {
    //       breakpoint: 1440,
    //       settings: {
    //         arrows: true,
    //         centerMode: true,
    //         centerPadding: "40px",
    //         slidesToShow: 1,
    //       },
    //     },
    //     {
    //       breakpoint: 968,
    //       settings: {
    //         arrows: false,
    //         centerMode: true,
    //         centerPadding: "40px",
    //         slidesToShow: 1,
    //       },
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         arrows: false,
    //         centerMode: true,
    //         centerPadding: "40px",
    //         slidesToShow: 1,
    //         arrows: false,
    //       },
    //     },
    //   ],
    // });

    if ($(this).find(".mySlides").length > 1) {
      $(this).siblings(".slides-numbers").show();
    }

    $(this).on("afterChange", function (event, slick, currentSlide) {
      $sliderParent
        .find(".slides-numbers .active")
        .html(helpers.addZeros(currentSlide + 1));
    });

    var sliderItemsNum = $(this)
      .find(".slick-slide")
      .not(".slick-cloned").length;
    $sliderParent
      .find(".slides-numbers .total")
      .html(helpers.addZeros(sliderItemsNum));
  });

  //   $('.slick-next').on('click', function () {
  //     console.log('test');
  //     $('.slider-holder').slick('slickGoTo', 5);
  // });
}

sliderInit();
