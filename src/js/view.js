// --------- DROPDOWN MENU ---------

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  const caret = document.querySelector(".fa-caret-down");

  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) {
    return;
  }

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
    caret.classList.toggle("fa-caret-down__rotate");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) {
      return;
    }
    dropdown.classList.remove("active");
    caret.classList.remove("fa-caret-down__rotate");
  });
});

// --------- GENRE ID FROM API ---------

const genreID = {
  action: 28,
  adventure: 12,
  animation: 16,
  comedy: 35,
  crime: 80,
  documentary: 99,
  drama: 18,
  family: 10751,
  fantasy: 14,
  history: 36,
  horror: 27,
  music: 10402,
  mystery: 9648,
  romance: 10749,
  science_fiction: 878,
  tv_movie: 10770,
  thriller: 53,
  war: 10752,
  western: 37,
};

// --------- HELPER FUNCTIONS ---------

const firstLetterCapitalize = function (word) {
  const firstLetter = word.charAt(0).toUpperCase();
  const remaining = word.slice(1);
  return `${firstLetter}${remaining}`;
};

// --------- HOME PAGE ---------

export const viewHome = function (data) {
  const featuredTitle = document.querySelector(".featured__title");
  const featuredDate = document.querySelector(".featured__date");
  const featuredGenre = document.querySelector(".featured__genre");
  const featuredOverview = document.querySelector(".featured__overview");

  const random = Math.floor(Math.random() * 20);
  const randomSelectedMovie = data[random];
  const imgPath = "https://image.tmdb.org/t/p/original";

  const genre = randomSelectedMovie.genre_ids
    .map((id) => {
      for (const [key, value] of Object.entries(genreID)) {
        if (id === value) {
          if (key.includes("_")) {
            const split = key.split("_");
            return split.map((word) => firstLetterCapitalize(word)).join(" ");
          } else {
            return firstLetterCapitalize(key);
          }
        }
      }
    })
    .join(", ");

  document.body.style.backgroundImage = `linear-gradient(to bottom right, rgba(13, 16, 24, 0.8), rgba(0, 0, 0, 0.9)), url(${imgPath}${randomSelectedMovie.backdrop_path})`;

  featuredTitle.textContent = randomSelectedMovie.title;
  featuredDate.textContent = randomSelectedMovie.release_date.slice(0, 4);
  featuredGenre.textContent = genre;
  featuredOverview.textContent = randomSelectedMovie.overview;
};

// --------- HOME PAGE SLIDER ---------

export const populateSlider = function (data) {
  const slider = document.querySelector(".swiper-wrapper");
  const imgPath = "https://image.tmdb.org/t/p/original";

  slider.innerHTML = "";

  data.forEach((movie) => {
    const newDIV = document.createElement("div");
    newDIV.classList.add("swiper-slide");

    const newImg = document.createElement("img");
    newImg.classList.add("swiper-img");
    newImg.dataset.title = movie.original_title;
    newImg.src = `${imgPath}${movie.poster_path}`;

    newDIV.appendChild(newImg);
    slider.appendChild(newDIV);
  });

  // SWIPER ------------------------------

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: "true",
    },

    mousewheel: {
      invert: true,
    },

    keyboard: {
      enabled: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 460px
      460: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 720px
      720: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      // when window width is >= 1000px
      1000: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      // when window width is >= 1400px
      1400: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      // when window width is >= 1700px
      1700: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
    },
  });
};

// --------- MOBILE MENU HAMBURGER ---------

const main = document.querySelector(".main");
const hamburgerMenu = document.querySelector(".mobile-menu__hamburger");
const mobileMenu = document.querySelector(".mobile-menu__off-screen");

hamburgerMenu.addEventListener("click", function () {
  main.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// --------- GENRE DOM RENDER ---------

const dropdownLink = document.querySelectorAll(".dropdown__link");

export const genreHandler = function (handler) {
  dropdownLink.forEach((link) => {
    link.addEventListener("click", function (e) {
      const query = e.target.dataset.genre;
      console.log(query, genreID[query]);
      handler(genreID[query]);
    });
  });
};
