import React from "react";
import styled from "styled-components";

const SearchDiv = styled.div``;

const SearchInput = styled.input``;
const SearchBtn = styled.button``;

const Search = () => {
  return (
    <SearchDiv>
      <SearchInput type="text" />
      <SearchBtn>Search</SearchBtn>
    </SearchDiv>
  );
};

export default Search;
