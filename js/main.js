
$(window).on("load", function () {
  $('body,html').scrollTop(0)
  $(".pre-loader").fadeOut(500, function () {
      $(this).remove();
      $('html, body').css("overflow-y", "visible");


  });
});

  AOS.init();
  
  
$(function() {





    $(".header .nav-bar .contact-us-icon .contact").on("click", function () {
      $(".call-us-form").fadeIn();
      $('html, body').css("overflow-y", "hidden");
    });
    $(".call-us-form, .call-us-form .form .close").on("click", function () {
      $(".call-us-form").fadeOut();
      $('html, body').css("overflow-y", "visible");
    });
    $(".call-us-form .form").on("click", function(e) {
      e.stopPropagation();
    });


    $(window).scroll(function () {
      if ($(window).scrollTop() > $(".header").innerHeight() - 140) {
        $(".header .nav-bar").addClass("fixed");
    } else {
        $(".header .nav-bar").removeClass("fixed");
    }
    
    });


    $(window).scroll(function () {
      if ($(window).scrollTop() > $(".header .fixed-icons").innerHeight() ) {
        $(".header .fixed-icons").addClass("fixed");
    } else {
        $(".header .fixed-icons").removeClass("fixed");
    }
    
    });



    $(".our-work .our-work-nav div").on("click", function() {
      $(this).addClass("active").siblings().removeClass("active");
    });

    $(".our-work .our-work-nav .all").on("click", function() {
      $(".our-work .our-work-content div").fadeIn(500);
    });
    $(".our-work .our-work-nav .one").on("click", function() {
      $(".our-work .our-work-content .one-show").fadeIn(500);
      $(".our-work .our-work-content .two-show").fadeOut(10);
      $(".our-work .our-work-content .three-show").fadeOut(10);
      $(".our-work .our-work-content .four-show").fadeOut(10);
    });
    $(".our-work .our-work-nav .two").on("click", function() {
      $(".our-work .our-work-content .two-show").fadeIn(500);
      $(".our-work .our-work-content .one-show").fadeOut(10);
      $(".our-work .our-work-content .three-show").fadeOut(10);
      $(".our-work .our-work-content .four-show").fadeOut(10);
    });
    $(".our-work .our-work-nav .three").on("click", function() {
      $(".our-work .our-work-content .three-show").fadeIn(500);
      $(".our-work .our-work-content .two-show").fadeOut(10);
      $(".our-work .our-work-content .one-show").fadeOut(10);
      $(".our-work .our-work-content .four-show").fadeOut(10);
    });
    $(".our-work .our-work-nav .four").on("click", function() {
      $(".our-work .our-work-content .four-show").fadeIn(500);
      $(".our-work .our-work-content .two-show").fadeOut(10);
      $(".our-work .our-work-content .three-show").fadeOut(10);
      $(".our-work .our-work-content .one-show").fadeOut(10);
    });


    // $(".header .fixed-icons")
    $('.our-clients .clients-logos .owl-carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:30,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:2
          },
          1000:{
              items:6
          }
      },
      navText: ["<i class='fa fa-chevron-right'></i>","<i class='fa fa-chevron-left'></i>"]
    });


    $('.news .news-content .owl-carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:30,
      dots:true,
      nav:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      },
      navText: ["<i class='fa fa-chevron-right'></i>","<i class='fa fa-chevron-left'></i>"]
    });

    
    

    

    
  

  // menu - search

    $(".fixed-menu .nav-list .slide").on("click", function() {
      $(this).toggleClass("active");
      $(this).children("ul").slideToggle();
      });


      
      
    $(".fixed-nav .menu").on("click", function() {
      $(".fixed-menu").fadeToggle();
      $("html, body").toggleClass("overflow-h");
      $(".fixed-nav .menu i").toggleClass("fa-bars");
      $(".fixed-nav .menu i").toggleClass("fa-times");
    });
    $(".fixed-menu .close").on("click", function() {
      $(".fixed-menu").fadeOut();
      $("html, body").removeClass("overflow-h");
      $(".fixed-nav .menu i").addClass("fa-bars");
      $(".fixed-nav .menu i").removeClass("fa-times");
    });




    var scene = $('#scene').get(0);
    var parallaxInstance = new Parallax(scene);

    
  
});
