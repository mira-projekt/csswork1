// here stars scrolling icon
$(document).ready(function () {
  /*
  var defaults = {
      containerID: 'toTop', // fading element id
    containerHoverID: 'toTopHover', // fading element hover id
    scrollSpeed: 1200,
    easingType: 'linear' 
    };
  */

  $().UItoTop({
    easingType: 'easeOutQuart'
  });

});

$("span.menu").click(function () {
  $("ul.nav1").slideToggle(300, function () {
    // Animation complete.
  });
});

// Slider - starts - Here

// You can also use "$(window).load(function() {"
$(function () {
  // Slideshow 4
  $("#slider2").responsiveSlides({
    auto: true,
    pager: true,
    nav: false,
    speed: 500,
    namespace: "callbacks",
    before: function () {
      $('.events').append("<li>before event fired.</li>");
    },
    after: function () {
      $('.events').append("<li>after event fired.</li>");
    }
  });

});

// You can also use "$(window).load(function() {"
$(function () {
  // Slideshow 4
  $("#slider3").responsiveSlides({
    auto: true,
    pager: true,
    nav: true,
    speed: 500,
    namespace: "callbacks",
    before: function () {
      $('.events').append("<li>before event fired.</li>");
    },
    after: function () {
      $('.events').append("<li>after event fired.</li>");
    }
  });

});

// You can also use "$(window).load(function() {"
$(function () {
  // Slideshow 4
  $("#slider5").responsiveSlides({
    auto: true,
    pager: true,
    nav: false,
    speed: 500,
    namespace: "callbacks",
    before: function () {
      $('.events').append("<li>before event fired.</li>");
    },
    after: function () {
      $('.events').append("<li>after event fired.</li>");
    }
  });

});

// pop - up - box

$(document).ready(function () {
  $('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });

});
//pop-up-box -->

// Script for gallery Here

$(function () {

  var filterList = {

    init: function () {

      // MixItUp plugin
      // http://mixitup.io
      $('#portfoliolist').mixitup({
        targetSelector: '.portfolio',
        filterSelector: '.filter',
        effects: ['fade'],
        easing: 'snap',
        // call the hover effect
        onMixEnd: filterList.hoverEffect()
      });

    },

    hoverEffect: function () {

      // Simple parallax effect
      $('#portfoliolist .portfolio').hover(
        function () {
          $(this).find('.label').stop().animate({
            bottom: 0
          }, 200, 'easeOutQuad');
          $(this).find('img').stop().animate({
            top: -30
          }, 500, 'easeOutQuad');
        },
        function () {
          $(this).find('.label').stop().animate({
            bottom: -40
          }, 200, 'easeInQuad');
          $(this).find('img').stop().animate({
            top: 0
          }, 300, 'easeOutQuad');
        }
      );

    }

  };

  // Run the show!
  filterList.init();


});

// Gallery Script Ends