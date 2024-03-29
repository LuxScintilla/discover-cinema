// fetch(`/.netlify/functions/fetch-movie?query=${mySearch}`).then((response) =>
//   console.log(response.json())
// );

// fetch(`/.netlify/functions/fetch-movie`).then((response) =>
//   console.log(response.json())
// );

// https://api.themoviedb.org/3/discover/movie?api_key=###&with_genres=28

//by id
//https://api.themoviedb.org/3/movie/343611?api_key=###

export const trendingArray = [];
export const searchArray = [];

const watchListArray = localStorage.getItem("watchList")
  ? JSON.parse(localStorage.getItem("watchList"))
  : [];

export const getTrendingMovies = async function () {
  try {
    const response = await fetch(`/.netlify/functions/fetch-movie`);
    const movies = await response.json();
    const data = movies.results;

    data.forEach((item) => {
      trendingArray.push(item);
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchMovies = async function (query) {
  try {
    const response = await fetch(
      `/.netlify/functions/fetch-movie?query=${query}`
    );
    const movies = await response.json();
    const data = movies.results;

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchMoviesGenre = async function (query) {
  try {
    const response = await fetch(
      `/.netlify/functions/fetch-movie?with_genres=${query}`
    );
    const movies = await response.json();
    const data = movies.results;

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const saveLocalStorage = async function (query, id) {
  try {
    const response = await fetch(
      `/.netlify/functions/fetch-movie?query=${query}`
    );
    const movies = await response.json();
    const data = movies.results;

    const watchList = localStorage.getItem("watchList")
      ? JSON.parse(localStorage.getItem("watchList"))
      : [];

    data.forEach((movie) => {
      if (watchList.length === 0 || movie.id === Number(id)) {
        const duplicateCheck = watchList.some(
          (listItem) => listItem.id === movie.id
        );

        if (duplicateCheck === false) {
          watchList.push(movie);
          localStorage.setItem("watchList", JSON.stringify(watchList));
        } else {
          console.log("Movie is already in your watchlist");
          throw new Error("Movie is already in your watchlist");
        }
      }
    });
  } catch (error) {
    throw error;
  }
};

export const deleteLocalStorageItem = function (id) {
  const watchList = localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [];
  const filteredArray = watchList.filter((movie) => {
    if (movie.id !== Number(id)) {
      return movie;
    }
  });
  localStorage.setItem("watchList", JSON.stringify(filteredArray));
};
