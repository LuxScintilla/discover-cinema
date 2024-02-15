// fetch(`/.netlify/functions/fetch-movie?query=${mySearch}`).then((response) =>
//   console.log(response.json())
// );

// fetch(`/.netlify/functions/fetch-movie`).then((response) =>
//   console.log(response.json())
// );

// https://api.themoviedb.org/3/discover/movie?api_key=###&with_genres=28

export const trendingArray = [];
export const searchArray = [];
export const watchlistArray = [];

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
