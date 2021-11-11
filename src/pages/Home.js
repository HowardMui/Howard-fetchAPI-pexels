import React from "react";
import Search from "../components/Search";

const Home = () => {
  const auth = process.env.Pexelskey;

  return (
    <div>
      <Search />
    </div>
  );
};

export default Home;
