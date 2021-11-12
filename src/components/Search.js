import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
// require("dotenv").config();

const SearchDiv = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const Input_Btn = css`
  border: solid 2px black;
  font-size: 1.25rem;
  padding: 0.5rem;
`;

const SearchInput = styled.input`
  ${Input_Btn};
  width: 30%;
`;
const SearchBtn = styled.button`
  ${Input_Btn};
  color: #fff;
  background: purple;
  cursor: pointer;
`;

const Search = ({ search }) => {
  return (
    <SearchDiv>
      <SearchInput type="text" />
      <SearchBtn onClick={search}>Search</SearchBtn>
    </SearchDiv>
  );
};

export default Search;
