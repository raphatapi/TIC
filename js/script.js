$(document).ready(function(){
    // // Add smooth scrolling to all links
    // $(".nav-link").on('click', function(event) {
    //   // Prevent default anchor click behavior
    //   event.preventDefault();
  
    //   // Store hash
    //   var hash = this.hash;
    //   // Make sure this.hash has a value before overriding default behavior
    //   if (this.hash !== "") {
        
  
    //     // Using jQuery's animate() method to add smooth page scroll
    //     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    //     $('html, body').animate({
    //       scrollTop: $(hash).offset().top - $("nav").outerHeight(true)
    //     }, 800, function(){
  
    //       // Add hash (#) to URL when done scrolling (default click behavior)
    //       window.location.hash = hash;
    //     });
    //   } // End if
    // });


    $('.nav-link').click(function(){    
      var divId = $(this).attr('href');
       $('html, body').animate({
        scrollTop: $(divId).offset().top - $("nav").outerHeight(true)
      }, 100);
    });

    
    AOS.init();
  });