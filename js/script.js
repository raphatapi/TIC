$(document).ready(function(){
  
  $('.carousel').carousel('cycle');

  var btn = $('#up');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 900);
  });

  $('.btn').on('click', function(e) {
    e.preventDefault();
    var divId = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(divId).offset().top - $("nav").outerHeight(true) + 1
    }, 1000);
  });

    $('.nav-link').click(function(){    
      var divId = $(this).attr('href');
       $('html, body').animate({
        scrollTop: $(divId).offset().top - $("nav").outerHeight(true) + 1
      }, 1000);
    });

    $(".ct-btn-scroll").click(function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
          // Store hash
          var hashTop = this.hash;
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (1200) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
              scrollTop: $(hashTop).offset().top - $("nav").outerHeight(true) + 1
            }, 1600, function(){
          });
      } // End if
    });

    $(".cover").paroller({ factor: 0.5, factorXs: 0.2, factorSm: 0.3});
    $(".title").paroller();
    
    AOS.init();
  });