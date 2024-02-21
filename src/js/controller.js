import * as model from "./model.js";
import * as view from "./view.js";

// --------- LOAD INITIAL FEATURED TRENDING FROM API BY RANDOM ---------

const loadInitial = async function () {
  try {
    const data = await model.getTrendingMovies();
    view.renderHome(data);
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

const loadWatch = async function (query) {
  try {
    const result = await model.searchMovies(query);

    if (document.querySelector(".featured")) {
      view.renderWatch(result, query);
    } else {
      const data = await model.getTrendingMovies();
      view.renderHome(data);
      view.renderWatch(result, query);
    }
  } catch (error) {
    console.log(error);
  }
};

const loadSearch = async function (query) {
  try {
    const result = await model.searchMovies(query);
    view.renderSearch(result, query);
  } catch (error) {
    console.log(error);
  }
};

const pass2LocalStorage = function (query, id) {
  model.saveLocalStorage(query, id);
};

const init = function () {
  loadInitial();
  view.genreHandler(loadGenre);
  view.homeHandler(loadInitial);
  view.watchHandler(loadWatch);
  view.searchHandler(loadSearch);
  view.localStorageHandler(pass2LocalStorage);
};

init();
