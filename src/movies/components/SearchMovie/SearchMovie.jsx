import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const STextInput = styled.input`
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.1em;
  width: 300px;
`;

const SSearchMovie = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
  position: relative;

  input {
    border-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  img {
    width: 25px;
    height: 25px;
    margin-left: 25px;
    display: flex;
    align-self: center;
    position: absolute;
    right: 15px;
  }
`;

const SearchMovie = ({ onSearch, placeholder }) => {
  const handleChange = event => {
    onSearch(event.target.value);
  };

  return (
    <SSearchMovie>
      <STextInput placeholder={placeholder} onChange={handleChange} />
      <img src="images/search-icon.svg" alt="Search" />
    </SSearchMovie>
  );
};

SearchMovie.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default SearchMovie;
