
$(window).on("load", function () {
  $('body,html').scrollTop(0)
  $(".pre-loader").fadeOut(500, function () {
      $(this).remove();
      $('html, body').css("overflow-y", "visible");


  });
});

  AOS.init();
  
  
$(function() {



  // $(".nav-bar .zx-container .sm-screan button .lnr-magnifier").on("click", function() {
  //   $(this).toggleClass("lnr-magnifier");
  //   $(this).toggleClass("lnr-cross");
  //   $(".nav-bar .zx-container .search").toggleClass("show");
  //   $(".search-overlay").fadeIn();
  // });
  // $(".search-overlay").on("click", function() {
  //   $(".nav-bar .search-popup").removeClass("show");
  //   $(this).fadeOut();
  // });
  
  // $('a[data-scroll]').on("click",function (e){
  //   e.preventDefault();    
    
  //   $("html, body").animate({
  //     scrollTop: $($(this).attr("data-scroll")).offset().top
  //   }, 1000);
  // });


    $(window).scroll(function () {
      if ($(window).scrollTop() > $(".header .fixed-icons").innerHeight() ) {
        $(".header .fixed-icons").addClass("fixed");
    } else {
        $(".header .fixed-icons").removeClass("fixed");
    }
    
    });



    $(".our-work .our-work-nav .all").on("click", function() {
      $(".our-work .our-work-content div").fadeIn();
    });
    $(".our-work .our-work-nav .one").on("click", function() {
      $(".our-work .our-work-content .one-show").fadeIn();
      $(".our-work .our-work-content .two-show").fadeOut();
      $(".our-work .our-work-content .three-show").fadeOut();
      $(".our-work .our-work-content .four-show").fadeOut();
    });
    $(".our-work .our-work-nav .two").on("click", function() {
      $(".our-work .our-work-content .two-show").fadeIn();
      $(".our-work .our-work-content .one-show").fadeOut();
      $(".our-work .our-work-content .three-show").fadeOut();
      $(".our-work .our-work-content .four-show").fadeOut();
    });
    $(".our-work .our-work-nav .three").on("click", function() {
      $(".our-work .our-work-content .three-show").fadeIn();
      $(".our-work .our-work-content .two-show").fadeOut();
      $(".our-work .our-work-content .one-show").fadeOut();
      $(".our-work .our-work-content .four-show").fadeOut();
    });
    $(".our-work .our-work-nav .four").on("click", function() {
      $(".our-work .our-work-content .four-show").fadeIn();
      $(".our-work .our-work-content .two-show").fadeOut();
      $(".our-work .our-work-content .three-show").fadeOut();
      $(".our-work .our-work-content .one-show").fadeOut();
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
    });
    $(".fixed-menu .close").on("click", function() {
      $(".fixed-menu").fadeOut();
    });


    // $(".nav-bar .zx-container .sm-screan button .lnr-menu").on("click", function() {
    //   $(".fixed-menu").fadeIn();
    //   $(".fixed-menu .menu").addClass("show");
    //   $(".fixed-menu .menu .menu-list ul").addClass("active");
    //   $('html, body').css("overflow-y", "hidden");
    // });
    // $(".fixed-menu, .close").on("click", function() {
    //   $(".fixed-menu").fadeOut();
    //   $(".fixed-menu .menu").removeClass("show");
    //   $(".fixed-menu .menu .menu-list ul").removeClass("active");
    //   $('html, body').css("overflow-y", "visible");
    // });
    // $(".fixed-menu .menu").on("click", function(e) {
    //   e.stopPropagation();
    // });

    // $(".fixed-menu .menu .menu-list ul .slide").on("click", function() {
    //   $(this).toggleClass("active");
    //   $(this).children("ul").slideToggle();
    //   });
    
    

  
});