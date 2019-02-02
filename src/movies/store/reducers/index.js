import { types } from "../actions";

const initialState = {
  items: [],
  search: []
};

const markWatchedUnwatched = (movies, imdbID) => {
  if (!Array.isArray(movies)) {
    throw new Error("movies must be an array");
  }

  return [...movies].map(movie => {
    if (movie.imdbID === imdbID) {
      movie.isWatched = !movie.isWatched;
    }
    return movie;
  });
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_MOVIES:
      const { movies, purpose } = action;
      if (purpose === "lookup") {
        return { ...state, search: movies };
      } else {
        movies.map(movie => {
          movie.isWatched = false;
          return movie;
        });
        return { ...state, items: movies };
      }
    case types.TOGGLE_MOVIE_SEEN_UNSEEN:
      return {
        ...state,
        items: markWatchedUnwatched(state.items, action.imdbID)
      };
    case types.ADD_MOVIE:
      state.items.unshift({ ...action.movie, isWatched: false });
      return {
        ...state
      };
    case types.REMOVE_MOVIE:
      return {
        ...state,
        items: state.items.filter(item => item.imdbID !== action.imdbID)
      };
    case types.CLEAR_SEARCH:
      return {
        ...state,
        search: []
      };
    default:
      return state;
  }
};
