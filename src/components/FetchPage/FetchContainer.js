import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import "../../styles/styles.scss";
import Loading from "../partials/Loading";
import Search from "../Search/Search";
import DataDiv from "./DataDiv";
// import SearchFunction from "../Function/FunctionSearch";

const FetchContainer = () => {
  let [input, setInput] = useState("");
  let [fetchDataStorage, setFetchData] = useState(null);
  let [current, setCurrent] = useState("");
  let [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  //   let prevInput = useRef("");

  const auth = process.env.REACT_APP_PEXELSKEY;
  const intialURL = `https://api.pexels.com/v1/curated?page=1&per_page=15`;
  const searchURL = `https://api.pexels.com/v1/search?query=${current}&per_page=15`;

  const searchFn = async () => {
    // console.log("searchFn is running");
    if (current.trim() === "") {
      let dataFetch = await fetch(intialURL, {
        method: "GET",
        headers: { Accept: "application/json", Authorization: auth },
      });

      let parsedData = await dataFetch.json();

      setFetchData(parsedData.photos);
      console.log(parsedData);
    } else {
      let dataFetch = await fetch(searchURL, {
        method: "GET",
        headers: { Accept: "application/json", Authorization: auth },
      });
      console.log("fetch searchURL");
      let parsedData = await dataFetch.json();
      setFetchData(parsedData.photos);
      setLoading(false);
      setInput("");
      setPage(2);
    }
  };

  const findPicFn = async () => {
    setLoading(true);
    setCurrent(input);
    console.log(current);
    if (current.trim() === "") {
      console.log("Go to searchFn");
      return searchFn();
    }

    console.log(searchURL);
    let dataFetch = await fetch(searchURL, {
      method: "GET",
      headers: { Accept: "application/json", Authorization: auth },
    });
    let parsedData = await dataFetch.json();
    setFetchData(parsedData.photos);
    setLoading(false);
    setInput("");
  };

  const loadMoreFn = async () => {
    setLoading2(true);
    let newURL;
    if (current.trim() === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${current}&per_page=15&page=${page}`;
    }
    setPage((page += 1));
    console.log(newURL);
    const fetchData = await fetch(newURL, {
      method: "GET",
      headers: { Accept: "application/json", Authorization: auth },
    });
    const parsedData = await fetchData.json();
    console.log(parsedData);
    setFetchData(fetchDataStorage.concat(parsedData.photos));
    setLoading2(false);
  };

  useEffect(() => {
    searchFn();
  }, [current]);

  const stateItemSearch = { input, setInput, findPicFn };
  const stateItemData = { fetchDataStorage, loadMoreFn, loading2 };

  return (
    <div id="fetch-container">
      <Container>
        <Search {...stateItemSearch} />
        {loading ? <Loading /> : <DataDiv {...stateItemData} />}
      </Container>
    </div>
  );
};

export default FetchContainer;
