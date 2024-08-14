$(document).ready(function () {
  // Swiper initialization functions
  function initializeSwiper(selector, options) {
    return new Swiper(selector, options);
  }
  // Clients slider
  initializeSwiper(".clients .swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 12,
    watchSlidesProgress: true,
    speed: 1000,
    pagination: { el: ".partnersPagination", clickable: true },
    autoplay: { delay: 1500, disableOnInteraction: false },
    breakpoints: {
      0: { slidesPerView: 2 },
      768: { slidesPerView: 4 },
      991: { slidesPerView: 5 },
      1400: { slidesPerView: 6 },
    },
  });
  // Product slider
  initializeSwiper(".ourProducts .swiper", {
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    pagination: { el: ".swiper-pagination", type: "fraction" },
    loop: true,
    spaceBetween: 12,
    watchSlidesProgress: true,
    speed: 1000,
    autoplay: { delay: 2500, disableOnInteraction: false },
    breakpoints: {
      0: { slidesPerView: 1 },
      657: { slidesPerView: 2 },
      991: { slidesPerView: 3 },
    },
  });
  $(".ourProducts .swiper").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );
  // Latest portfolio slider
  initializeSwiper(".latestPortfolio .swiper", {
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    pagination: { el: ".swiper-pagination", type: "fraction" },
    loop: true,
    spaceBetween: 12,
    watchSlidesProgress: true,
    speed: 1000,
    autoplay: { delay: 2500, disableOnInteraction: false },
    breakpoints: {
      0: { slidesPerView: 1 },
      657: { slidesPerView: 2 },
      991: { slidesPerView: 3 },
    },
  });
  $(".latestPortfolio .swiper").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );
  // Video slider
  initializeSwiper(".videoSliderContainer", {
    spaceBetween: 0,
    speed: 500,
    pagination: { el: ".videoSliderPagination", clickable: true },
    navigation: { nextEl: ".videoSliderNext", prevEl: ".videoSliderPrev" },
  });
  // Item details slider
  const productSliderThumbs = initializeSwiper(".productSlider .thumbs", {
    spaceBetween: 8,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: { slidesPerView: 3 },
      576: { slidesPerView: 4 },
      992: { slidesPerView: 5, direction: "vertical" },
    },
  });
  initializeSwiper(".productSlider .slider", {
    spaceBetween: 8,
    pagination: { el: ".productSlider .swiper-pagination", clickable: true },
    navigation: { nextEl: ".productSlider .swiper-button-next", prevEl: ".productSlider .swiper-button-prev" },
    thumbs: { swiper: productSliderThumbs },
  });
  // Phone view slider
  initializeSwiper(".phoneView .swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 60,
    speed: 1000,
    autoplay: { delay: 2000, disableOnInteraction: false },
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 5,
      stretch: 10,
      depth: 200,
      modifier: 1.2,
      slideShadows: true,
    },
  });
  // Infinite slider
  initializeSwiper(".infinite .swiper", {
    spaceBetween: 12,
    centeredSlides: true,
    speed: 3000,
    autoplay: { delay: 0.5 },
    loop: true,
    slidesPerView: "auto",
    allowTouchMove: false,
    disableOnInteraction: true,
  });
  // Spinner loader
  $(".spinerLoader").delay(500).fadeOut(300);
  // AOS delay setup
  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      if (!$(this).attr("data-aos-delay")) {
        $(this).attr("data-aos-delay", (index + 1) * 50);
      }
    });
  });
  // Initialize AOS
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    once: true,
  });
  // Initialize Bootstrap tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  // Initialize counter up
  const counterUp = window.counterUp.default;
  const callback = (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting && !el.classList.contains("is-visible")) {
        counterUp(el, {
          duration: 3000,
          delay: 16,
        });
        el.classList.add("is-visible");
      }
    });
  };
  const IO = new IntersectionObserver(callback, { threshold: 1 });
  const elements = document.querySelectorAll(".counterUp");
  elements.forEach((el) => IO.observe(el));
});

// profile Image Input
$(document).ready(function () {
  $(".uploadImageInput").on("change", function (event) {
    const file = event.target.files[0];
    const $preview = $(this)
      .siblings(".uploadImageLabel")
      .find(".uploadImagePreview");
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $preview.attr("src", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });
});

document.querySelectorAll('.progressBar').forEach(bar => {
  const value = bar.getAttribute('data-value');  // Get the value from data-value attribute
  const progressLine = bar.querySelector('.progressLine');
  progressLine.style.width = `${value}%`;        // Set the width of the progress line
});
