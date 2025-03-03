var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3, // Show 3 slides on large screens
    spaceBetween: 20, // Reduce gaps
    loop: true, // Enable infinite scroll
    centeredSlides: false, // Prevents unnecessary blank spaces
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        500: { slidesPerView: 1 },
    }
});

