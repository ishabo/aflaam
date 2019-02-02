import { combineReducers } from "redux";

import { reducers } from "movies";

const rootReducer = combineReducers({
  movies: reducers.moviesReducer
});

export default rootReducer;
