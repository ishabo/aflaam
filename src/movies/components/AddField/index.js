import AddField from "./AddField";
import { connect } from "react-redux";
import { fetchMovies, clearSearch, addMovie } from "../../store/actions";

const mapStateToProps = state => ({
  movies: state.movies.search
});

const mapDispatchToProps = {
  fetchMovies,
  clearSearch,
  addMovie
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddField);
