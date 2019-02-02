import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { SButton } from "../../styles/elements";

const SGridLayout = styled.div`
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 6px;
  border-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const SGridSTiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const STile = styled.div`
  padding: 1em;
  height: 200px;
  width: 45%;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  margin-bottom: 1em;
  box-shadow: 1px 3px 11px #888888;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (max-width: 777px) {
    width: 100%;
  }
`;

const SItemPicture = styled.img`
  height: 100%;
`;

const SItemTitle = styled.div`
  font-size: 1.4em;
  padding: 0 1em 0 0;
`;

const SItemActions = styled.div``;

const Tile = ({ item, removeMovie, toggleMovieWatchedUnWatched }) => {
  const { imdbID, Poster, Title, Year, isWatched } = item;
  return (
    <STile key={imdbID}>
      <SItemPicture src={Poster} alt={Title} />
      <div>
        <div>
          <SItemTitle>{Title}</SItemTitle>
          <span>{Year}</span>
        </div>

        <SItemActions>
          <SButton onClick={() => toggleMovieWatchedUnWatched(imdbID)}>
            {isWatched ? "Unwatch" : "Watched"}
          </SButton>
          <SButton danger onClick={() => removeMovie(imdbID)}>
            Delete
          </SButton>
        </SItemActions>
      </div>
    </STile>
  );
};

const Grid = ({ itemList, searchMovies, ...rest }) => (
  <SGridLayout>
    <SGridSTiles>
      {(itemList.length > 0 &&
        itemList.map(item => (
          <Tile item={item} key={item.imdbID} {...rest} />
        ))) ||
        "No movies found"}
    </SGridSTiles>
  </SGridLayout>
);

Tile.propTypes = {
  item: PropTypes.object.isRequired,
  removeMovie: PropTypes.func.isRequired,
  toggleMovieWatchedUnWatched: PropTypes.func.isRequired
};

Grid.propTypes = {
  itemList: PropTypes.array.isRequired,
  removeMovie: PropTypes.func.isRequired,
  toggleMovieWatchedUnWatched: PropTypes.func.isRequired
};

export default Grid;
