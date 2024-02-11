// fetch(`/.netlify/functions/fetch-movie?query=${mySearch}`).then((response) =>
//   console.log(response.json())
// );

// fetch(`/.netlify/functions/fetch-movie`).then((response) =>
//   console.log(response.json())
// );

export const getTrendingMovies = async function () {
  try {
    const response = await fetch(`/.netlify/functions/fetch-movie`);
    const movies = await response.json();
    const data = movies.results;

    return data;
  } catch (error) {
    console.log(error);
  }
};
