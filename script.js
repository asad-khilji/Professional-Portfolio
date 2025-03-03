var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3, // Default for larger screens
    spaceBetween: 20, // Spacing between slides
    loop: true, // Enable infinite scroll
    centeredSlides: false, // Avoids unnecessary blank spaces
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    grabCursor: true, // Improves user experience on touch devices
    loopFillGroupWithBlank: true, // Prevent blank spaces
    breakpoints: {
        1200: { slidesPerView: 3, spaceBetween: 20 }, // Large screens
        1024: { slidesPerView: 3, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 10 }, // Tablets
        600: { slidesPerView: 1.5, spaceBetween: 10 }, // Large phones
        480: { slidesPerView: 1, spaceBetween: 5 }, // Mobile phones
    }
});
