import React from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Heading from "./components/Nav/Heading";
import Home from "./pages/Home";
import FetchContainer from "./components/FetchPage/FetchContainer";

const App = () => {
  return (
    <>
      <Router>
        <Heading />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/fetch" exact component={FetchContainer} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
