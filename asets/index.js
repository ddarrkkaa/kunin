const menu = document.querySelector(".menu");
const burger = menu.querySelector(".burger");

burger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

new Swiper(".reviews__slider", {
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".review-button-next",
    prevEl: ".review-button-prev",
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2,
    },
  },
});

new Swiper(".role__slider", {
  loop: false,
  spaceBetween: 24,
  navigation: {
    nextEl: ".role-button-next",
    prevEl: ".role-button-prev",
  },
  pagination: {
    el: ".role-slide-pagination",
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 1.5,
    },
    1400: {
      slidesPerView: 2,
    },
    1600: {
      slidesPerView: 2.5,
    },
  },
});

new Swiper(".benefits__slider", {
  loop: true,
  spaceBetween: 48,

  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 2,
    },
    1600: {
      slidesPerView: 3,
    },
  },
});

new Swiper(".result__swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 24,

  pagination: {
    el: ".result-slide-pagination",
  },

  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 2.5,
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
