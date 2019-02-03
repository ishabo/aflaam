import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Tile from "./Tile";

const SGridLayout = styled.div`
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 6px;
  border-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  min-height: 200px;
`;

const SGridSTiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MovieGrid = ({ itemList, searchMovies, ...rest }) => (
  <SGridLayout>
    <SGridSTiles>
      {(itemList.length > 0 &&
        itemList.map(item => (
          <Tile item={item} key={"item-" + item.imdbID} {...rest} />
        ))) ||
        "No movies found"}
    </SGridSTiles>
  </SGridLayout>
);

MovieGrid.propTypes = {
  itemList: PropTypes.array.isRequired,
  removeMovie: PropTypes.func.isRequired,
  toggleMovieWatchedUnWatched: PropTypes.func.isRequired
};

export default MovieGrid;
