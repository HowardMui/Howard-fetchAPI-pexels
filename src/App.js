import React from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
  } 
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/about" exact element={<About />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
