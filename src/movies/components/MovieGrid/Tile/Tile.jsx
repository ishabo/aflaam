import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { SButton } from "../../../styles/elements";
import { delay } from "../../../helpers";
import {
  explodeAnimation,
  slideOutAnimation
} from "../../../styles/animations";

const SItemPicture = styled.img`
  height: 100%;
`;

const SItemTitle = styled.div`
  font-size: 1.4em;
  padding: 0 1em 0 0;
`;

const SItemActions = styled.div``;

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

  ${({ removeAnimation }) => {
    switch (removeAnimation) {
      case "explode":
        return explodeAnimation;
      case "slideOut":
        return slideOutAnimation;
      default:
        return "";
    }
  }}
`;

class Tile extends React.Component {
  state = {
    shouldBeDeleted: false,
    shouldDisappear: false
  };

  removeMovie = () => {
    const { Title, imdbID } = this.props.item;
    if (window.confirm(`Are you sure you want to delete ${Title}`)) {
      this.setState({ shouldBeDeleted: true }, async () => {
        await delay(600);
        this.props.removeMovie(imdbID);
      });
    }
  };

  toggleMovieWatchedUnWatched = () => {
    const { imdbID } = this.props.item;
    this.setState({ shouldDisappear: true }, async () => {
      await delay(600);
      this.props.toggleMovieWatchedUnWatched(imdbID);
    });
  };

  render() {
    const { imdbID, Poster, Title, Year, isWatched } = this.props.item;

    let removeAnimation;
    if (this.state.shouldBeDeleted) {
      removeAnimation = "explode";
    } else if (this.state.shouldDisappear) {
      removeAnimation = "slideOut";
    }

    return (
      <STile key={imdbID} removeAnimation={removeAnimation}>
        <SItemPicture src={Poster} alt={Title} />
        <div>
          <div>
            <SItemTitle>{Title}</SItemTitle>
            <span>{Year}</span>
          </div>

          <SItemActions>
            <SButton onClick={() => this.toggleMovieWatchedUnWatched(imdbID)}>
              {isWatched ? "Unwatch" : "Watched"}
            </SButton>
            <SButton danger onClick={this.removeMovie}>
              Delete
            </SButton>
          </SItemActions>
        </div>
      </STile>
    );
  }
}

Tile.propTypes = {
  item: PropTypes.object.isRequired,
  removeMovie: PropTypes.func.isRequired,
  toggleMovieWatchedUnWatched: PropTypes.func.isRequired
};

export default Tile;
