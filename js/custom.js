$('.banner .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    dots: false,
    animateIn:'animate__fadeIn',
    animateOut: 'animate__fadeOut',
   autoplayTimeout: 3000,
      autoplay:true,
      autoplayHoverPause: false,
})

$('.dog-section .owl-carousel').owlCarousel({
    loop:true,
    margin:33,
    responsiveClass:true,
    nav:false,
     autoplayTimeout: 3000,
      autoplay:true,
    responsive:{
        0:{
            items:1
        },
        640:{
            items:2,
              margin:20,
        },
        1024:{
            items:3
        }
    }
})

var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});




jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
    $animatables.each(function(i) {
       var $animatable = $(this);
      if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
      }
    });

  };
  
  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});


  new Mmenu(document.querySelector(" #menu"));

            document.addEventListener("click", function (evnt) {
                var anchor = evnt.target.closest('a[href="#/"]');
                if (anchor) {
                    evnt.preventDefault();
                }
            });