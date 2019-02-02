import MovieList from "./MovieList";
import { connect } from "react-redux";
import {
  fetchMovies,
  removeMovie,
  toggleMovieWatchedUnWatched
} from "../../store/actions";

const mapStateToProps = state => ({
  movies: state.movies.items
});

const mapDispatchToProps = {
  fetchMovies,
  removeMovie,
  toggleMovieWatchedUnWatched
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
