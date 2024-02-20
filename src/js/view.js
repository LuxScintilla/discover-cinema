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

const convertKey2Title = function (id) {
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
};

const generateGenre = function (data) {
  return data.genre_ids
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
};

// --------- HOME PAGE ---------

export const renderHome = function (data) {
  const random = Math.floor(Math.random() * 20);
  const randomSelectedMovie = data[random];
  const imgPath = "https://image.tmdb.org/t/p/original";

  const genre = generateGenre(randomSelectedMovie);

  document.body.style.backgroundImage = `linear-gradient(to bottom right, rgba(13, 16, 24, 0.8), rgba(0, 0, 0, 0.9)), url(${imgPath}${randomSelectedMovie.backdrop_path})`;

  // CREATE FEATURED MOVIE ELEMENTS ----------------
  const container = document.createElement("div");
  container.classList.add("container");

  const featured = document.createElement("section");
  featured.classList.add("featured");

  const featuredTitle = document.createElement("h1");
  featuredTitle.classList.add("featured__title");
  featuredTitle.textContent = randomSelectedMovie.title;

  const featuredInfo = document.createElement("div");
  featuredInfo.classList.add("featured__info");

  const featuredDate = document.createElement("h2");
  featuredDate.classList.add("featured__date");
  featuredDate.textContent = randomSelectedMovie.release_date.slice(0, 4);

  const featuredGenre = document.createElement("h2");
  featuredGenre.classList.add("featured__genre");
  featuredGenre.textContent = genre;

  const featuredOverview = document.createElement("p");
  featuredOverview.classList.add("featured__overview");
  featuredOverview.textContent = randomSelectedMovie.overview;

  const featuredWatch = document.createElement("button");
  featuredWatch.classList.add("featured__watch");
  featuredWatch.textContent = "Watch";

  const featuredList = document.createElement("button");
  featuredList.classList.add("featured__list");
  featuredList.textContent = "Add to List";

  // CREATE SWIPER ELEMENTS ----------------
  const swiper = document.createElement("div");
  swiper.classList.add("swiper");

  const swiperWrapper = document.createElement("div");
  swiperWrapper.classList.add("swiper-wrapper");

  const swiperPrev = document.createElement("div");
  swiperPrev.classList.add("swiper-button-prev");

  const swiperNext = document.createElement("div");
  swiperNext.classList.add("swiper-button-next");

  // ATTACH ELEMENTS ----------------
  main.innerHTML = "";

  featuredInfo.appendChild(featuredDate);
  featuredInfo.appendChild(featuredGenre);
  featured.appendChild(featuredTitle);
  featured.appendChild(featuredInfo);
  featured.appendChild(featuredOverview);
  featured.appendChild(featuredWatch);
  featured.appendChild(featuredList);
  container.appendChild(featured);

  swiper.appendChild(swiperWrapper);
  swiper.appendChild(swiperPrev);
  swiper.appendChild(swiperNext);
  container.appendChild(swiper);

  main.appendChild(container);

  populateSlider(data, swiperWrapper);
};

const navLogo = document.getElementById("nav-logo");
const navHome = document.getElementById("nav-home");

export const homeHandler = function (handler) {
  navLogo.addEventListener("click", handler);
  navHome.addEventListener("click", handler);
};

// --------- HOME PAGE SLIDER ---------

const populateSlider = function (data, container) {
  const imgPath = "https://image.tmdb.org/t/p/original";

  data.forEach((movie) => {
    const newDIV = document.createElement("div");
    newDIV.classList.add("swiper-slide");

    const newImg = document.createElement("img");
    newImg.classList.add("swiper-img");
    newImg.dataset.title = movie.original_title;
    newImg.dataset.movie_id = movie.id;
    newImg.src = `${imgPath}${movie.poster_path}`;

    const newWatchButton = document.createElement("button");
    newWatchButton.classList.add("swiper-watch-button");
    newWatchButton.textContent = "Watch";
    newWatchButton.addEventListener("click", function () {
      clickedTitle = this.previousSibling.dataset.title;
      clickedID = this.previousSibling.dataset.movie_id;
    });

    const newListButton = document.createElement("button");
    newListButton.classList.add("swiper-list-button");
    newListButton.textContent = "Add to List";

    newDIV.appendChild(newImg);
    newDIV.appendChild(newWatchButton);
    newDIV.appendChild(newListButton);

    container.appendChild(newDIV);
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

export const renderGenre = async function (result, query) {
  const main = document.querySelector(".main");
  const imgPath = "https://image.tmdb.org/t/p/original";

  const container = document.createElement("div");
  container.classList.add("container");
  container.classList.add("grid");

  const genreTitle = document.createElement("h2");
  genreTitle.classList.add("movie-grid__title");
  genreTitle.textContent = convertKey2Title(query);

  container.appendChild(genreTitle);

  result.forEach((movie) => {
    const movieGridItem = document.createElement("div");
    movieGridItem.classList.add("movie-grid__item");

    const movieGridIMG = document.createElement("img");
    movieGridIMG.dataset.title = movie.original_title;
    movieGridIMG.dataset.movie_id = movie.id;
    movieGridIMG.classList.add("movie-grid__img");
    movieGridIMG.src = `${imgPath}${movie.poster_path}`;

    const newWatchButton = document.createElement("button");
    newWatchButton.classList.add("movie-grid__watch-button");
    newWatchButton.textContent = "Watch";
    newWatchButton.addEventListener("click", function () {
      clickedTitle = this.previousSibling.dataset.title;
      clickedID = this.previousSibling.dataset.movie_id;
      console.log(clickedTitle, clickedID);
    });

    const newListButton = document.createElement("button");
    newListButton.classList.add("movie-grid__list-button");
    newListButton.textContent = "Add to List";

    movieGridItem.appendChild(movieGridIMG);
    movieGridItem.appendChild(newWatchButton);
    movieGridItem.appendChild(newListButton);

    container.appendChild(movieGridItem);
  });
  main.innerHTML = "";
  main.appendChild(container);
};

export const genreHandler = function (handler) {
  const dropdownLink = document.querySelectorAll(".dropdown__link");

  dropdownLink.forEach((link) => {
    link.addEventListener("click", function (e) {
      let query = e.target.dataset.genre;
      if (query.includes(" ")) {
        query = query.split(" ").join("_");
      }

      handler(genreID[query]);

      const dropDown = e.target.closest("[data-dropdown]");
      const caret = document.querySelector(".fa-caret-down");
      dropDown.classList.remove("active");
      caret.classList.remove("fa-caret-down__rotate");
    });
  });
};

// --------- WATCH DOM RENDER ---------

let clickedTitle;
let clickedID;

export const watchHandler = function (handler) {
  document.addEventListener("click", function (e) {
    if (
      e.target.matches(".swiper-watch-button") ||
      e.target.matches(".movie-grid__watch-button")
    ) {
      handler(clickedTitle);
    }
  });
};

export const renderWatch = function (result, query) {
  const data = result.filter((movie) => {
    if (movie.id === Number(clickedID)) {
      return movie;
    }
  })[0];

  const genre = generateGenre(data);

  const imgPath = "https://image.tmdb.org/t/p/original";

  document.body.style.backgroundImage = `linear-gradient(to bottom right, rgba(13, 16, 24, 0.8), rgba(0, 0, 0, 0.9)), url(${imgPath}${data.backdrop_path})`;

  const featuredTitle = document.querySelector(".featured__title");
  const featuredInfo = document.querySelector(".featured__info");
  const featuredDate = document.querySelector(".featured__date");
  const featuredGenre = document.querySelector(".featured__genre");
  const featuredOverview = document.querySelector(".featured__overview");
  const featuredWatch = document.querySelector(".featured__watch");
  const featuredList = document.querySelector(".featured__list");

  featuredTitle.textContent = data.title;
  featuredInfo.classList.add("featured__info");
  featuredDate.textContent = data.release_date.slice(0, 4);
  featuredGenre.textContent = genre;
  featuredOverview.textContent = data.overview;
  featuredWatch.textContent = "Watch";
  featuredList.textContent = "Add to List";
};
