$(document).ready(function () {
  // Spinner loader
  $(".preloader").delay(1000).fadeOut(300);
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
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
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

document.querySelectorAll(".progressBar").forEach((bar) => {
  const value = bar.getAttribute("data-value"); // Get the value from data-value attribute
  const progressLine = bar.querySelector(".progressLine");
  progressLine.style.width = `${value}%`; // Set the width of the progress line
});

// dark mode
var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.src = "/img/icons/darks.svg";
  } else {
    icon.src = "/img/icons/sun.svg";
  }
};
