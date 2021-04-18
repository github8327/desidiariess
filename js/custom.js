  $(document).ready(function() {
      $('.embedsocial-hashtag iframe #es-header').addClass("delet-row");
      $('#es-header .table-inline').css({ "display": "none !important" });
      // scroll top
      // if (window.matchMedia("(max-width: 767px)").matches){

      $(window).scroll(function() {
          if ($(document).scrollTop() > 1) {
              $('.navbar.navbar-expand-md.navbar-dark').css({ "top": "0" });
              $('.navbar.navbar-expand-md.navbar-dark').addClass('nav-effect');
              $('.navbar.navbar-expand-md.navbar-dark').addClass('animated fadeInDown');
              $('.collapse.navbar-collapse').removeClass('animated fadeInDown');
              $('.our_product,.banner').css({ "margin-top": "220px" });
              $('.banner').css({ "margin-top": "120px" });

          } else {
              $('.navbar.navbar-expand-md.navbar-dark').css({ "top": "0px" });
              $('.navbar.navbar-expand-md.navbar-dark').removeClass('animated fadeInDown');
              $('.navbar.navbar-expand-md.navbar-dark').removeClass('nav-effect');
              $('.navbar.navbar-expand-md.navbar-dark').removeClass('secound-menu');
              $('.collapse.navbar-collapse').addClass('animated fadeInDown');
              $('.our_product,.banner').css({ "margin-top": "120px" });
              $('.banner').css({ "margin-top": "0px" });
          }
      });
  });


  //  mobile menu 
  if (window.matchMedia("(max-width: 767px)").matches) {
      var num = 1;

      $(".nav-link").click(function() {
          $(".navbar-collapse").removeClass("show");
          $(".navbar-collapse").attr({ 'aria-expanded': 'false' });
          $(".navbar-dark .navbar-toggler-icon").css({ 'background-image': 'url(img/menu.svg)' });
      });

      $(".navbar-toggler").click(function() {
          if (num == 1) {
              $(".navbar-dark .navbar-toggler-icon").css({ 'background-image': 'url(img/menu2.svg)' });
              num = 0;
          }
          else if (num == 0) {
              $(".navbar-dark .navbar-toggler-icon").css({ 'background-image': 'url(img/menu.svg)' });
              num = 1;
          }

      });
  }




// ourproduct menu active line

 $(window).scroll(function (event) {
        var sc = $(window).scrollTop();

         if (sc>1203 && sc<1876){
              $(".homepage .navbar-nav .nav-item.1 .line").removeClass("off");
        }else{
           $(".homepage .navbar-nav .nav-item.1 .line").addClass("off");
        }

        if (sc>1877 && sc<2474){
              $(".homepage .navbar-nav .nav-item.3 .line").removeClass("off");
        }else{
           $(".homepage .navbar-nav .nav-item.3 .line").addClass("off");
        }

        if (sc>2500){
              $(".homepage .navbar-nav .nav-item.4 .line").removeClass("off");
        }else{
           $(".homepage .navbar-nav .nav-item.4 .line").addClass("off");
        }
    });