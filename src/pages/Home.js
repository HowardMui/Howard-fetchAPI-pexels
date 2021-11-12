import React, { useState } from "react";
import Search from "../components/Search";

const Home = () => {
  let [input, setIput] = useState("");

  // let ClickHandler = () => {

  // }

  const searchURL = `https://api.pexels.com/v1/search?${input}=nature&per_page=1`;

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search />
    </div>
  );
};

export default Home;
