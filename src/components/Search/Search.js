import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import Hover from "./Hover";

const Search = ({ input, setInput, findPicFn }) => {
  return (
    <div className="search-div m-5">
      <InputGroup>
        <FormControl className="input-div" placeholder="Search" value={input} onChange={(e) => setInput(e.target.value)} />

        <InputGroup.Text>
          <Hover onHover={<BsArrowRight className="search-arrow-icon" />} findPicFn={findPicFn}>
            <BiSearchAlt2 className="search-icon" />
          </Hover>
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default Search;
