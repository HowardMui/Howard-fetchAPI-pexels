import React, { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../../styles/styles.scss";
import Loading from "../partials/Loading";
import Search from "../Search/Search";
import DataDiv from "./DataDiv";

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

  const searchFn = useCallback(async () => {
    if (current.trim() === "") {
      let dataFetch = await fetch(intialURL, {
        method: "GET",
        headers: { Accept: "application/json", Authorization: auth },
      });

      let parsedData = await dataFetch.json();

      setFetchData(parsedData.photos);
    } else {
      let dataFetch = await fetch(searchURL, {
        method: "GET",
        headers: { Accept: "application/json", Authorization: auth },
      });

      let parsedData = await dataFetch.json();
      setFetchData(parsedData.photos);
      setLoading(false);
      setInput("");
      setPage(2);
    }
  }, [auth, current, intialURL, searchURL]);

  const findPicFn = async () => {
    setLoading(true);
    setCurrent(input);

    if (current.trim() === "") {
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

    const fetchData = await fetch(newURL, {
      method: "GET",
      headers: { Accept: "application/json", Authorization: auth },
    });
    const parsedData = await fetchData.json();

    setFetchData(fetchDataStorage.concat(parsedData.photos));
    setLoading2(false);
  };

  useEffect(() => {
    searchFn();
  }, [searchFn]);

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
