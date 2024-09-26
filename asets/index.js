// const benefitsSwiper = new Swiper(".benefits__swiper", {
//   direction: "vertical",
//   loop: false,
//   slidesPerView: 2,
//   spaceBetween: 24,

//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

const reviewSwiper = new Swiper(".review__swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 2,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // breakpoints: {
  //   375: {
  //     slidesPerView: 1,
  //   },
  // },
});

const roleSwiper = new Swiper(".role__swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 2.5,
  spaceBetween: 24,

  pagination: {
    el: ".swiper-pagination",
  },

  // breakpoints: {
  //   375: {
  //     slidesPerView: 1,
  //   },
  // },
});

const resultSwiper = new Swiper(".result__swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
  },

  // breakpoints: {
  //   700: {
  //     slidesPerView: 2,
  //   },
  // },

  breakpoints: {
    375: {
      slidesPerView: 1,
    },
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
