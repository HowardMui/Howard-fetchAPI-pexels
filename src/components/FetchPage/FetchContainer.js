import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../../styles/styles.scss";
import Search from "../Search/Search";
import DataDiv from "./DataDiv";
// import SearchFunction from "../Function/FunctionSearch";

const FetchContainer = () => {
  let [input, setInput] = useState("");
  let [fetchData, setFetchData] = useState(null);
  let [current, setCurrent] = useState("");
  let [page, setPage] = useState(1);

  const auth = process.env.REACT_APP_PEXELSKEY;
  const intialURL = `https://api.pexels.com/v1/curated?page=1&per_page=15`;
  const searchURL = `https://api.pexels.com/v1/search?query=${current}&per_page=15`;

  //   const findPicFn = () => {
  //     SearchFunction.findPicFn(input, current, searchURL, setCurrent, setFetchData);
  //   };

  const searchFn = async () => {
    console.log("trigger search");
    if (current.trim() === "") {
      console.log("trigger initsearch");
      let dataFetch = await fetch(intialURL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: auth,
        },
      });

      let parsedData = await dataFetch.json();
      setFetchData(parsedData.photos);
      //   console.log(dataFetch);
      //   console.log(parsedData);
    } else {
      console.log("trigger searchURL");
      let dataFetch = await fetch(searchURL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: auth,
        },
      });
      let parsedData = await dataFetch.json();
      setFetchData(parsedData.photos);
      setInput("");
      setPage(2);
      console.log(dataFetch);
      console.log(parsedData);
    }
  };

  const findPicFn = async () => {
    setCurrent(input);
    console.log("trigger findPic");
    if (current.trim() === "") {
      return searchFn(input, current, intialURL, searchURL);
    }

    let dataFetch = await fetch(searchURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setFetchData(parsedData.photos);
    setInput("");
    // console.log(dataFetch);
    // console.log(parsedData);
  };

  return (
    <div id="fetch-container">
      <Container>
        <Search input={input} setInput={setInput} findPic={findPicFn} />
        <DataDiv fetchData={fetchData} />
      </Container>
    </div>
  );
};

export default FetchContainer;
