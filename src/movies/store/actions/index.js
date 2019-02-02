const namespace = "AFLAAM";

export const types = {
  FETCH_MOVIES: `${namespace}/FETCH_MOVIES`,
  SAVE_MOVIES: `${namespace}/SAVE_MOVIES`,
  TOGGLE_MOVIE_SEEN_UNSEEN: `${namespace}/TOGGLE_MOVIE_SEEN_UNSEEN`,
  ADD_MOVIE: `${namespace}/ADD_MOVIE`,
  REMOVE_MOVIE: `${namespace}/REMOVE_MOVIE`,
  CLEAR_SEARCH: `${namespace}/CLEAR_SEARCH`
};

export const fetchMovies = (purpose = "initial", searchKeyword = "one") => ({
  purpose,
  searchKeyword,
  type: types.FETCH_MOVIES
});

export const saveMovies = (movies, purpose) => ({
  movies,
  purpose,
  type: types.SAVE_MOVIES
});

export const addMovie = movie => ({
  movie,
  type: types.ADD_MOVIE
});

export const toggleMovieWatchedUnWatched = imdbID => ({
  imdbID,
  type: types.TOGGLE_MOVIE_SEEN_UNSEEN
});

export const removeMovie = imdbID => ({
  imdbID,
  type: types.REMOVE_MOVIE
});

export const clearSearch = () => ({
  type: types.CLEAR_SEARCH
});
