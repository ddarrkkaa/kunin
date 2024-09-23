const review__swiper = new Swiper(".review__swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 2,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const role__swiper = new Swiper(".role__swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 2,
  spaceBetween: 24,

  pagination: {
    el: ".swiper-pagination",
  },
});

const invest__swiper = new Swiper(".invest__swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 2,
  spaceBetween: 24,

  pagination: {
    el: ".swiper-pagination",
  },
});

const benefits__swiper = new Swiper(".benefits__swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  spaceBetween: 24,

  pagination: {
    el: ".swiper-pagination",
  },
});

const result__swiper = new Swiper(".result__swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 2,
  spaceBetween: 24,

  pagination: {
    el: ".swiper-pagination",
  },
});

function handleDropdownClick(dropdown) {
  const activeDropdowns = dropdown.parentElement.querySelectorAll(".active");

  dropdown.classList.toggle("active");

  activeDropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
}

const dropdownWrappers = document.querySelectorAll(".dropdown-wrapper");
dropdownWrappers.forEach((dropdownWrapper) => {
  const dropdowns = dropdownWrapper.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", () => handleDropdownClick(dropdown));
  });
});
