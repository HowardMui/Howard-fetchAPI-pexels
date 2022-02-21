import React from "react";
import Footer from "./components/Footer/Footer";
import FetchPage from "./components/FetchPage/FetchPage";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      <Router>
        <GlobalStyle />
        <Heading />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/fetch" exact component={FetchPage} />
          <Route path="/fetchtry" exact component={FetchContainer} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
