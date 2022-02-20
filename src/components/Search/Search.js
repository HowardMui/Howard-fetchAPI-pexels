import React, { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import { css } from "styled-components";
import { Button } from "../partials/Button";
import Hover from "./Hover";
import "./search.scss";

const Search = ({ input, setInput, findPic }) => {
  return (
    <div className="search-div m-5">
      <InputGroup>
        <FormControl className="input-div" placeholder="Search" value={input} onChange={(e) => setInput(e.target.value)} />

        <InputGroup.Text>
          <Hover onHover={<BsArrowRight className="search-arrow-icon" />} findPic={findPic}>
            <BiSearchAlt2 className="search-icon" />
          </Hover>
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default Search;
