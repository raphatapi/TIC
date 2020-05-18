$(document).ready(function(){
  $('.nav-link').click(function(){    
    var divId = $(this).attr('href');
     $('html, body').animate({
      scrollTop: $(divId).offset().top - 210
    }, 100);
  }); 

    
    AOS.init();
  });