
$(document).ready(function () {
  'use strict';
  
  // Show / Hidden Slide Navbar
  
  $(window).scroll(function () {
    var navbar = $('.navbar');
    if ($(window).scrollTop() >= $('section.one.special').offset().top) {
      navbar.addClass('scrolled');
    } else {
      navbar.removeClass('scrolled');
    }
  });
  
  // Show / Hidden Menue Navbar
  
  $(".navbar i.fas.fa-bars").on("click", function () {
    $(".menue").toggleClass('hidden');
  });
  
  $(".menue i.fa-times").on("click", function () {
    $(".menue").toggleClass('hidden');
  });
  
  // Show / Hidden Menue  Generic
  
  $(".navbar-generic i.fas.fa-bars").on("click", function () {
    $(".menue-generic").toggleClass('hidden');
  });
  
  $(".menue-generic i.fa-times").on("click", function () {
    $(".menue-generic").toggleClass('hidden');
  });
  
  // Loading Screen
  

  setTimeout(function () {
    "use strict";
    $('.loading .sk-circle').fadeOut(1000, function () {
      $(this).parent().fadeOut(1000, function () {
        $("body").css({
          overflow: "auto",
          overflowX: "hidden",
        });
          
        // body NiceScroll 
        
        // $("html").niceScroll({
        //   cursorcolor:"#51ccab",
        //   horizrailenabled: false
        // });

        $(this).remove();
      });
    });
  }, 500);
  

  // Scroll To Button
  var scrollButton = $("#scroll-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 1100) {
      scrollButton.show();
    } else {
      scrollButton.hide();
    }
  });
  scrollButton.click(function () {
    $("html,body").animate({scrollTop: 0}, 2000);
  });

});

$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay:true,
  slidesToShow: 1,
  arrows:true
});