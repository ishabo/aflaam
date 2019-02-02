import styled from "styled-components";

export const SMoviesListLayout = styled.div`
  padding: 2em;
  width: 100%;
`;

export const STextInput = styled.input`
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.1em;
  width: 300px;
`;

export const SButton = styled.button`
  padding: 1em;
  user-select: none;
  cursor: pointer;
  background-color: ${({ danger }) => {
    if (danger) {
      return "#CC452D";
    } else {
      return "#4fafa6";
    }
  }};
  color: white;
  font-weight: 900;
  border-radius: 4px;
`;
