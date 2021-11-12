import React, { useState } from "react";
import Search from "../components/Search";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const Homecontainer = styled.div`
  min-height: 100vh;
`;

const FetchWrapper = styled.div`
  p {
  }
`;

const FetchImg = styled.img`
  width: 30%;
  height: 30%;
`;

const Home = () => {
  let [input, setIput] = useState("");
  // let [isClick, setClick] = useState(false);

  let [data, setData] = useState(null);

  const auth = process.env.REACT_APP_PEXELSKEY;
  const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=5";
  const searchURL = `https://api.pexels.com/v1/search?${input}=nature&per_page=1`;

  let search = async () => {
    let dataFetch = await fetch(intialURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setData(parsedData.photos);
    // console.log(dataFetch);
    // console.log(parsedData);
  };

  // if (data === true) {
  //   setClick(true);
  // }

  console.log(data);

  return (
    <Homecontainer>
      <Search search={search} />
      {data &&
        data.map((items, index) => {
          console.log(items);

          return (
            <FetchWrapper>
              <p>{items.photographer}</p>
              <FetchImg src={items.src.large} />
              <p>Download Image:</p>
              <a href={items.url} target="_blank" rel="noreferrer">
                Click Here
              </a>
            </FetchWrapper>
          );
        })}
    </Homecontainer>
  );
};

export default Home;
