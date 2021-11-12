import React, { useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";
require("dotenv").config();

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

const Search = () => {
  let [data, setData] = useState(null);

  const auth = process.env.PEXELSKEY;
  console.log(process.env);
  const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";

  let search = async () => {
    let dataFetch = await fetch(intialURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setData(parsedData);
  };

  return (
    <SearchDiv>
      <SearchInput type="text" />
      <SearchBtn onClick={search}>Search</SearchBtn>
    </SearchDiv>
  );
};

export default Search;
