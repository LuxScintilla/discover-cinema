import * as model from "./model.js";
import * as view from "./view.js";

// --------- LOAD INITIAL FEATURED TRENDING FROM API BY RANDOM ---------

const loadInitial = async function () {
  try {
    const data = await model.getTrendingMovies();
    view.renderHome(data);
  } catch (error) {
    console.log(error);
    view.errorRender();
  }
};

const loadGenre = async function (query) {
  try {
    const result = await model.searchMoviesGenre(query);
    view.renderGenre(result, query);
  } catch (error) {
    console.log(error);
    view.errorRender();
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
    view.errorRender();
  }
};

const loadSearch = async function (query) {
  try {
    const result = await model.searchMovies(query);
    view.renderSearch(result, query);
  } catch (error) {
    console.log(error);
    view.errorRender();
  }
};

const pass2LocalStorage = async function (query, id) {
  try {
    await model.saveLocalStorage(query, id);
    view.modalConfirmation("Movie has been added");
  } catch (error) {
    console.log(error.message);
    view.modalConfirmation(error.message);
  }
};

const deleteFromLocalStorage = function (id) {
  model.deleteLocalStorageItem(id);
  view.watchListRender();
};

const init = function () {
  loadInitial();
  view.genreHandler(loadGenre);
  view.homeHandler(loadInitial);
  view.watchHandler(loadWatch);
  view.searchHandler(loadSearch);
  view.localStorageHandler(pass2LocalStorage);
  view.deleteButtonHandler(deleteFromLocalStorage);
  view.mobileHomeHandler(loadInitial);
  view.mobileGenreHandler(loadGenre);
};

init();
