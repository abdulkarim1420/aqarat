let owl = $(".owl-carousel").owlCarousel({
    dots: true,
    nav: false,
    items: 5,
    margin: 20,
    rtl: true,
    // navText : ["<img src='imgs/right.png' style='width: 20px;'>","<img src='imgs/left.png' style='width: 20px;'>"],
    // navText: [$('.am-next'),$('.am-prev')],
    
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        // 1000:{
        //     items:3
        // },
  }
  }
  );
  // Go to the next item
  $('.next-card-four').click(function() {
    owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.prev-card-four').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  });

// AOS.init();
