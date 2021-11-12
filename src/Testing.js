import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  } 

  html, body {
  overflow-x: hidden;
}
`;

const Navbar = styled.nav`
  background: purple;
`;

const testing = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar>
        <h1>Hello</h1>
      </Navbar>
    </div>
  );
};

export default testing;
