import { call, put, takeEvery } from "redux-saga/effects";

import { types, saveMovies } from "../actions";
import { fetchMovies } from "../../services";

export function* fetchMoviesSaga({ purpose, searchKeyword }) {
  const result = yield call(fetchMovies, "movie", searchKeyword);
  try {
    if (!result.data.Search) {
      throw new Error(`Unexpected data structure`);
    }
    yield put(saveMovies(result.data.Search, purpose));
  } catch (error) {
    console.warn("An error occurred, could not fetch movies", error);
  }
}

export const watcher = () => {
  return [takeEvery(types.FETCH_MOVIES, fetchMoviesSaga)];
};
