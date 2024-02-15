const axios = require("axios");

const handler = async (event) => {
  const API_KEY = process.env.API_KEY;
  const { query } = event.queryStringParameters;
  const { with_genres } = event.queryStringParameters;
  let URL;
  if (query) {
    URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
  } else if (with_genres) {
    URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${with_genres}`;
  } else {
    URL = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}`;
  }

  try {
    const { data } = await axios.get(URL);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    const { status, statusText, headers, data } = error.response;
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};

module.exports = { handler };

// original

// const handler = async (event) => {
//   const API_KEY = process.env.API_KEY;
//   const { query } = event.queryStringParameters;
//   let URL;
//   if (query) {
//     URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
//   } else {
//     URL = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}`;
//   }

//   try {
//     const { data } = await axios.get(URL);

//     return {
//       statusCode: 200,
//       body: JSON.stringify(data),
//     };
//   } catch (error) {
//     const { status, statusText, headers, data } = error.response;
//     return {
//       statusCode: status,
//       body: JSON.stringify({ status, statusText, headers, data }),
//     };
//   }
// };

// module.exports = { handler };
