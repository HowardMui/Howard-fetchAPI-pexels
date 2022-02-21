import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../../styles/styles.scss";
import Search from "../Search/Search";
import DataDiv from "./DataDiv";
// import SearchFunction from "../Function/FunctionSearch";

const FetchContainer = () => {
  let [input, setInput] = useState("");
  let [fetchDataStorage, setFetchData] = useState(null);
  let [current, setCurrent] = useState("");
  let [page, setPage] = useState(1);

  const auth = process.env.REACT_APP_PEXELSKEY;
  const intialURL = `https://api.pexels.com/v1/curated?page=1&per_page=15`;
  const searchURL = `https://api.pexels.com/v1/search?query=${current}&per_page=15`;

  const searchFn = async () => {
    if (current.trim() === "") {
      let dataFetch = await fetch(intialURL, {
        method: "GET",
        headers: { Accept: "application/json", Authorization: auth },
      });

      let parsedData = await dataFetch.json();
      console.log(parsedData);
      setFetchData(parsedData.photos);
    } else {
      let dataFetch = await fetch(searchURL, {
        method: "GET",
        headers: { Accept: "application/json", Authorization: auth },
      });
      let parsedData = await dataFetch.json();
      setFetchData(parsedData.photos);
      setInput("");
      setPage(2);
    }
  };

  const findPicFn = async () => {
    setCurrent(input);
    if (current.trim() === "") {
      return searchFn();
    }

    let dataFetch = await fetch(searchURL, {
      method: "GET",
      headers: { Accept: "application/json", Authorization: auth },
    });
    let parsedData = await dataFetch.json();
    setFetchData(parsedData.photos);
    setInput("");
  };

  const loadMoreFn = async () => {
    let newURL;
    if (current.trim() === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${current}&per_page=15&page=${page}`;
    }
    setPage((page += 1));
    const fetchData = await fetch(newURL, {
      method: "GET",
      headers: { Accept: "application/json", Authorization: auth },
    });
    const parsedData = await fetchData.json();
    setFetchData(fetchDataStorage.concat(parsedData.photos));
  };

  console.log(fetchDataStorage);
  const stateItem = { input, setInput, findPicFn };

  return (
    <div id="fetch-container">
      <Container>
        <Search {...stateItem} />
        <DataDiv fetchDataStorage={fetchDataStorage} loadMoreFn={loadMoreFn} />
      </Container>
    </div>
  );
};

export default FetchContainer;
