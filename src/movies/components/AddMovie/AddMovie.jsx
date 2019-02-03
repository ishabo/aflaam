import React from "react";
import PropTypes from "prop-types";
import { STextInput, SButton } from "../../styles/elements";
import styled from "styled-components";

const SAutoCompleteUL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1em 2em;
  border: 1px solid #ccc;
  width: 345px;
  border-top: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  position: absolute;
  background-color: white;
  box-shadow: 11px 5px 26px -8px #888888;
`;

const SAutoCompleteLI = styled.li`
  padding: 0.5em 0;
  cursor: pointer;
`;

export const SAddButton = styled(SButton)`
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font-size: 1.1em;
`;

class AddMovie extends React.Component {
  state = {
    searchValue: "",
    selectedMovie: null,
    activateAutocomplete: false
  };

  handleChange = event => {
    this.props.clearSearch();
    this.setState(
      {
        activateAutocomplete: event.target.value.length > 0,
        searchValue: event.target.value
      },
      () => {
        this.props.fetchMovies("lookup", this.state.searchValue);
      }
    );
  };

  onSubmit = () => {
    if (!this.state.selectedMovie) {
      alert(
        "You have not selected a movie. Start typing int he field to get a suggested list as it autocompletes your input."
      );
      return;
    }
    this.props.addMovie(this.state.selectedMovie);
    this.setState(
      { searchValue: "", selectedMovie: null, activateAutocomplete: false },
      this.props.onAdd
    );
  };

  selectMovie = movie => {
    this.setState(
      {
        searchValue: movie.Title,
        selectedMovie: movie,
        activateAutocomplete: false
      },
      this.props.clearSearch
    );
  };

  render() {
    const { buttonText, placeholder, movies } = this.props;
    return (
      <>
        <STextInput
          placeholder={placeholder}
          onChange={this.handleChange}
          value={this.state.searchValue}
        />
        <SAddButton onClick={this.onSubmit}>{buttonText || "Add"}</SAddButton>
        {this.state.activateAutocomplete && (
          <SAutoCompleteUL>
            {movies.map(movie => (
              <SAutoCompleteLI
                key={"search-" + movie.imdbID}
                onClick={() => {
                  this.selectMovie(movie);
                }}
              >
                {movie.Title} - {movie.Year}
              </SAutoCompleteLI>
            ))}
          </SAutoCompleteUL>
        )}
      </>
    );
  }
}

AddMovie.propTypes = {
  placeholder: PropTypes.string.isRequired,
  clearSearch: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  buttonText: PropTypes.string
};

export default AddMovie;
