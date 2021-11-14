import React, { useState, useEffect, useRef } from "react";
import Search from "../components/Search";
import styled from "styled-components";
import { Button } from "../components/Button";
// import { Link } from "react-router-dom";

const Homecontainer = styled.div`
  min-height: 100vh;
  text-align: center;
`;

const FetchDiv = styled.div`
  margin: 3rem 5rem 1rem 5rem;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const FetchWrapper = styled.div`
  margin: 1rem;
  /* max-height: 500px; */

  p {
  }

  a {
    text-decoration: none;
    color: #000;
    transition: 0.1s ease-out;
    &:hover {
      color: yellowgreen;
    }
  }
`;

const ImgDiv = styled.div`
  overflow-y: hidden;
`;

const FetchImg = styled.img`
  width: 100%;
  /* height: 60%; */
  transition: all 0.3s ease-in;

  &:hover {
    transform: scale(1.25);
  }
`;

const FetchBtn = styled.div`
  text-align: center;
`;

const Home = () => {
  let [input, setInput] = useState("");
  // let [isClick, setClick] = useState(false);

  let [data, setData] = useState(null);
  let [page, setPage] = useState(2);
  let [current, setCurrent] = useState("");
  // let prevInput = useRef("");

  const auth = process.env.REACT_APP_PEXELSKEY;
  const intialURL = `https://api.pexels.com/v1/curated?page=1&per_page=15`;
  const searchURL = `https://api.pexels.com/v1/search?query=${current}&per_page=15`;

  let search = async () => {
    if (current.trim() === "") {
      let dataFetch = await fetch(intialURL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: auth,
        },
      });
      let parsedData = await dataFetch.json();
      setData(parsedData.photos);
      // console.log(parsedData);
    } else {
      let dataFetch = await fetch(searchURL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: auth,
        },
      });
      let parsedData = await dataFetch.json();
      setData(parsedData.photos);
      setInput("");
      setPage(2);
    }

    // console.log(dataFetch);
    // console.log(parsedData);
  };

  const loadMore = async () => {
    let newURL;
    if (current.trim() === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${current}&per_page=15&page=${page}`;
    }
    console.log(newURL);
    setPage((page += 1));
    const fetchData = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    const parseddData = await fetchData.json();
    setData(data.concat(parseddData.photos));
  };

  useEffect(() => {
    search();
  }, []);

  useEffect(() => {
    search();
    console.log(current);
  }, [current]);

  // useEffect(() => {
  //   prevInput.current = input;
  //   console.log(prevInput.current);
  // }, [input]);

  // let findPic = async () => {
  //   if (input.trim() === "") {
  //     return search();
  //   }

  //   let dataFetch = await fetch(searchURL, {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       Authorization: auth,
  //     },
  //   });
  //   let parsedData = await dataFetch.json();
  //   setData(parsedData.photos);
  //   setInput("");
  //   // console.log(dataFetch);
  //   // console.log(parsedData);
  // };
  // console.log(input);

  // console.log(data);

  return (
    <Homecontainer>
      <Search
        findPic={() => {
          setCurrent(input);
        }}
        input={input}
        setInput={setInput}
      />
      <FetchDiv>
        {data &&
          data.map((items, index) => {
            return (
              <FetchWrapper>
                <p>{items.photographer}</p>
                <ImgDiv>
                  <FetchImg src={items.src.tiny} />
                </ImgDiv>
                <p>
                  Download Image:
                  <a href={items.url} target="_blank" rel="noreferrer">
                    Click Here
                  </a>
                </p>
              </FetchWrapper>
            );
          })}
      </FetchDiv>
      <FetchBtn>
        <Button red onClick={loadMore}>
          Load More
        </Button>
      </FetchBtn>
    </Homecontainer>
  );
};

export default Home;
