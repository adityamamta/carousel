// Skógafoss Waterfall – Iceland
// The Dark Hedges – Northern Ireland
// Cappadocia Caves – Turkey
// Hallstatt – Austria
// Bamboo Forest – Japan
// Neuschwanstein Castle – Germany




new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    lazy: {
        loadOnTransitionStart: true, // Optional: To load images during slide transitions
    },
    spaceBetween: 5,
    keyboard: {
        enable: true,
    },
    breakpoints: {
        // When window width is >= 480px
        480: {
          slidesPerView: 1.5,
          spaceBetween: 10 // Set spaceBetween to 20px for screens >= 480px
        },
        // When window width is >= 768px
        768: {
          slidesPerView: 1.5,
          spaceBetween: 15 // Set spaceBetween to 30px for screens >= 768px
        },
        // When window width is >= 1024px
        1024: {
          slidesPerView: 1.5,
          spaceBetween: 24 // Set spaceBetween to 40px for screens >= 1024px
        }
      },

    navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});