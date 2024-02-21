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

    data.forEach((movie) => {
      if (movie.id === Number(id)) {
        watchListArray.push(movie);
        localStorage.setItem("watchList", JSON.stringify(watchListArray));
      }
    });
  } catch (error) {
    console.log(error);
  }
};
