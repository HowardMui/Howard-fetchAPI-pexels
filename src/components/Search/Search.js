import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";
import { css } from "styled-components";
import { Button } from "../partials/Button";

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
    // <SearchDiv>
    //   <SearchInput type="text" onChange={changeHandler} value={input} />
    //   <Button onClick={findPic}>Search</Button>
    // </SearchDiv>

    <div className="search-div m-5">
      <InputGroup>
        <FormControl className="input-div" placeholder="Search" />
        <InputGroup.Text id="basic-addon1">
          <BiSearchAlt2 />
        </InputGroup.Text>
      </InputGroup>
    </div>

    // <div id="search-div">
    //   <div className="input-div">
    //     <input placeholder="Search"></input>
    //   </div>
    //   <div className="btn-div">
    //     <button>
    //       <BiSearchAlt />
    //     </button>
    //   </div>
    // </div>
  );
};

export default Search;
