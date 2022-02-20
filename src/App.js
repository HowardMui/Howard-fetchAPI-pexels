import React from "react";
import Footer from "./components/Footer/Footer";
import FetchPage from "./components/FetchPage/FetchPage";
import { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Heading from "./components/Nav/Heading";
import Home from "./pages/Home";
import FetchContainer from "./components/FetchPage/FetchContainer";

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
      <Heading />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/fetch" exact element={<FetchPage />} />
        <Route path="/fetchtry" exact element={<FetchContainer />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
