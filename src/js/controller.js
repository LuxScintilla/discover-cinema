import * as model from "./model.js";
import * as view from "./view.js";

// --------- LOAD INITIAL FEATURED TRENDING FROM API BY RANDOM ---------

const loadInitial = async function () {
  try {
    const data = await model.getTrendingMovies();
    view.renderHome(data);
    // view.populateSlider(data);
  } catch (error) {
    console.log(error);
  }
};

const loadGenre = async function (query) {
  try {
    const result = await model.searchMoviesGenre(query);
    view.renderGenre(result, query);
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  loadInitial();
  view.genreHandler(loadGenre);
  view.homeHandler(loadInitial);
};

init();
