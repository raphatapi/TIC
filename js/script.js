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


    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });


    $('.nav-link').click(function(){    
      var divId = $(this).attr('href');
       $('html, body').animate({
        scrollTop: $(divId).offset().top - $("nav").outerHeight(true)
      }, 100);
    });

    
    AOS.init();
  });