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

class AddField extends React.Component {
  state = {
    searchValue: "",
    selectedMovie: null
  };

  handleChange = event => {
    this.setState({ searchValue: event.target.value }, () => {
      if (this.state.searchValue.length > 2) {
        this.props.fetchMovies("lookup", this.state.searchValue);
      }
    });
  };

  onSubmit = () => {
    this.props.addMovie(this.state.selectedMovie);
    this.setState({ searchValue: "", selectedMovie: null }, this.props.onAdd);
  };

  selectMovie = movie => {
    this.setState(
      {
        searchValue: movie.Title,
        selectedMovie: movie
      },
      this.props.clearSearch
    );
  };

  render() {
    const { buttonText, placeholder, movies } = this.props;
    return (
      <>
        <>
          <STextInput
            placeholder={placeholder}
            onChange={this.handleChange}
            value={this.state.searchValue}
          />
          <SAddButton onClick={this.onSubmit}>{buttonText || "Add"}</SAddButton>
        </>
        <>
          {movies.length > 0 && (
            <SAutoCompleteUL>
              {movies.map(movie => (
                <SAutoCompleteLI
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
      </>
    );
  }
}

AddField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  clearSearch: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  buttonText: PropTypes.string
};

export default AddField;
