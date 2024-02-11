// const mySearch = "avatar";
// const imgPath = "https://image.tmdb.org/t/p/original";

// fetch(`/.netlify/functions/fetch-movie?query=${mySearch}`).then((response) =>
//   console.log(response.json())
// );

// fetch(`/.netlify/functions/fetch-movie`).then((response) =>
//   console.log(response.json())
// );

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

// --------- HELPER FUNCTIONS ---------

const firstLetterCapitalize = function (word) {
  const firstLetter = word.charAt(0).toUpperCase();
  const remaining = word.slice(1);
  return `${firstLetter}${remaining}`;
};

// --------- LOAD INITIAL FEATURED TRENDING FROM API BY RANDOM ---------

const loadInitial = async function () {
  const featuredTitle = document.querySelector(".featured__title");
  const featuredDate = document.querySelector(".featured__date");
  const featuredGenre = document.querySelector(".featured__genre");
  const featuredOverview = document.querySelector(".featured__overview");

  const random = Math.floor(Math.random() * 20);
  const imgPath = "https://image.tmdb.org/t/p/original";

  try {
    const response = await fetch(`/.netlify/functions/fetch-movie`);
    const movies = await response.json();
    const data = movies.results[random];

    const genre = data.genre_ids
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

    document.body.style.backgroundImage = `linear-gradient(to bottom right, rgba(13, 16, 24, 0.8), rgba(0, 0, 0, 0.9)), url(${imgPath}${data.backdrop_path})`;

    featuredTitle.textContent = data.title;
    featuredDate.textContent = data.release_date.slice(0, 4);
    featuredGenre.textContent = genre;
    featuredOverview.textContent = data.overview;
  } catch (error) {
    console.log(error);
  }
};

loadInitial();
