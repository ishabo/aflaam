import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Tabs, MovieGrid, AddMovie, SearchMovie } from "../../components";
import { SMoviesListLayout } from "../../styles/elements";

const SFilters = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0 0 0;
`;

class MovieList extends React.Component {
  state = {
    activeTab: "unwatched",
    searchKeyword: ""
  };

  componentDidMount() {
    this.props.fetchMovies();
  }

  setActive = activeTab => {
    this.setState({ activeTab });
  };

  captureSearchKeyword = searchKeyword => {
    this.setState({ searchKeyword });
  };

  listTabItems = () => {};

  getFilteredMovies = (isWatched, searchKeyword = "") =>
    this.props.movies.filter(
      movie =>
        ((!!searchKeyword &&
          movie.Title.match(new RegExp(searchKeyword, "i"))) ||
          !searchKeyword) &&
        movie.isWatched === isWatched
    );

  getTotalMovies = isWatched => this.getFilteredMovies(isWatched).length;

  render() {
    return (
      <SMoviesListLayout>
        <AddMovie
          placeholder="Movie..."
          buttonText="Add"
          onAdd={() => {
            this.forceUpdate();
          }}
        />

        <SFilters>
          <Tabs
            tabItems={[
              {
                id: "unwatched",
                name: "Unwatched",
                total: this.getTotalMovies(false),
                active: this.state.activeTab === "unwatched"
              },
              {
                id: "watched",
                name: "Watched",
                total: this.getTotalMovies(true),
                active: this.state.activeTab === "watched"
              }
            ]}
            setActive={this.setActive}
          />

          <SearchMovie
            onSearch={this.captureSearchKeyword}
            placeholder="Filter added movies..."
          />
        </SFilters>

        <MovieGrid
          itemList={this.getFilteredMovies(
            this.state.activeTab === "watched",
            this.state.searchKeyword
          )}
          removeMovie={this.props.removeMovie}
          toggleMovieWatchedUnWatched={this.props.toggleMovieWatchedUnWatched}
        />
      </SMoviesListLayout>
    );
  }
}

MovieList.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  removeMovie: PropTypes.func.isRequired,
  toggleMovieWatchedUnWatched: PropTypes.func.isRequired
};

export default MovieList;
