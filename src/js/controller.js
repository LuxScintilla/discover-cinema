import * as model from "./model.js";
import * as view from "./view.js";

// --------- LOAD INITIAL FEATURED TRENDING FROM API BY RANDOM ---------

const loadInitial = async function () {
  try {
    const data = await model.getTrendingMovies();
    view.viewHome(data);
    view.populateSlider(data);
  } catch (error) {
    console.log(error);
  }
};

const loadGenre = async function (query) {
  const result = await model.searchMoviesGenre(query);
  view.renderGenre(result, query);
};

const init = function () {
  loadInitial();
  view.genreHandler(loadGenre);
};

init();
