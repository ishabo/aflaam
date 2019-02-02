import React, { Component } from "react";
import { Provider } from "react-redux";
import { MovieList } from "movies";
import store from "./store";
import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  * {
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;


    -ms-user-select: none;
    user-select: none;
  }
}
`;

const SLayout = styled.div`
  display: flex;
  flex-direction: "row";
  max-width: 1012px;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <SLayout>
          <MovieList />
        </SLayout>
      </Provider>
    );
  }
}

export default App;
