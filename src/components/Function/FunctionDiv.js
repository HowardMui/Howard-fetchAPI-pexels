// import React, { useState } from "react";

// const FunctionDiv = () => {
//   const auth = process.env.REACT_APP_PEXELSKEY;
//   const intialURL = `https://api.pexels.com/v1/curated?page=1&per_page=15`;
//   const searchURL = `https://api.pexels.com/v1/search?query=${current}&per_page=15`;

//   //   const findPicFn = () => {
//   //     SearchFunction.findPicFn(input, current, searchURL, setCurrent, setFetchData);
//   //   };

//     // searchfunction()

//   const searchFn = async ({props}, ref) => {
//     if (props.current.trim() === "") {
//       console.log("trigger initsearch");
//       let dataFetch = await fetch(intialURL, {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           Authorization: auth,
//         },
//       });

//       let parsedData = await dataFetch.json();
//       props.setFetchData(parsedData.photos);

//     } else {
//       let dataFetch = await fetch(searchURL, {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           Authorization: auth,
//         },
//       });
//       let parsedData = await dataFetch.json();
//       props.setFetchData(parsedData.photos);
//       props.setInput("");
//       props.setPage(2);
//     }
//   };

//   const findPicFn = async () => {
//     props.setCurrent(props.input);
//     if (props.current.trim() === "") {
//       return searchFn();
//     }

//     let dataFetch = await fetch(searchURL, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         Authorization: auth,
//       },
//     });
//     let parsedData = await dataFetch.json();
//     props.setFetchData(parsedData.photos);
//     props.setInput("");
//   };

//   return <div>{props.children}</div>;
// };

// export default FunctionDiv();
