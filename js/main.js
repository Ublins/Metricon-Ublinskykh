//Scroll animation 
AOS.init({ 
    // Настройки: 
    disable: 'phone', 
    startEvent: 'DOMContentLoaded',  
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate', 
    useClassNames: false,  
    disableMutationObserver: false,  
    debounceDelay: 0.,  
    throttleDelay: 99,  
    offset: 40, 
    delay: 0, 
    duration: 600, 
    easing: 'ease', 
    once: false,   
    mirror: false, 
    anchorPlacement: 'top-bottom', 
});

$('.slider').on('init', function(event, slick){
  AOS.init();
});




$(document).ready(function() { 
  $('.slider').slick({

      dots: true, 
      arrows: true, 
      slidesToShow:1, 
      speed: 900, 
      adaptiveHeight:false, 
      autoplay:true, 
      autoplaySpeed: 3000, 
      centerMode:false 

  }); 
});






