import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { Button } from "./Button";

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

const Search = ({ input, setInput, findPic }) => {
  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <SearchDiv>
      <SearchInput type="text" onChange={changeHandler} value={input} />
      <Button onClick={findPic}>Search</Button>
    </SearchDiv>
  );
};

export default Search;
