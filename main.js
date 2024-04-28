const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    effect: "coverflow",
    coverflowEffect: {
        rotate: 20,
        stretch: 50,
        slideShadows: true,

    },
  });

  const buttons = document.querySelectorAll(".asks__button");
  buttons.forEach(button => {
    button.addEventListener("click", function() {
      
      button.classList.toggle("active");
      
    });
  });
  