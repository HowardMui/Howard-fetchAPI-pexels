// const auth = process.env.REACT_APP_PEXELSKEY;
// const intialURL = `https://api.pexels.com/v1/curated?page=1&per_page=15`;
// const searchURL = `https://api.pexels.com/v1/search?query=${current}&per_page=15`;

// class SearchFunction {
//   searchFn = async (current, intialURL, searchURL) => {
//     console.log("trigger search");
//     if (current.trim() === "") {
//       console.log("trigger initsearch");
//       let dataFetch = await fetch(intialURL, {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           Authorization: auth,
//         },
//       });

//       let parsedData = await dataFetch.json();
//       setFetchData(parsedData.photos);
//       //   console.log(dataFetch);
//       //   console.log(parsedData);
//     } else {
//       console.log("trigger searchURL");
//       let dataFetch = await fetch(searchURL, {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           Authorization: auth,
//         },
//       });
//       let parsedData = await dataFetch.json();
//       setFetchData(parsedData.photos);
//       setInput("");
//       setPage(2);
//       console.log(dataFetch);
//       console.log(parsedData);
//     }
//   };

//   findPicFn = async (input, current, searchURL, setCurrent, setFetchData) => {
//     setCurrent(input);
//     console.log("trigger findPic");
//     if (current.trim() === "") {
//       return searchFn(input, current, intialURL, searchURL, setCurrent, setFetchData);
//     }

//     let dataFetch = await fetch(searchURL, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         Authorization: auth,
//       },
//     });
//     let parsedData = await dataFetch.json();
//     setFetchData(parsedData.photos);
//     setInput("");
//     // console.log(dataFetch);
//     // console.log(parsedData);
//   };
// }

// export default new SearchFunction();

// const searchFn = async () => {
//   console.log("trigger search");
//   if (current.trim() === "") {
//     console.log("trigger initsearch");
//     let dataFetch = await fetch(intialURL, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         Authorization: auth,
//       },
//     });

//     let parsedData = await dataFetch.json();
//     setFetchData(parsedData.photos);
//     //   console.log(dataFetch);
//     //   console.log(parsedData);
//   } else {
//     console.log("trigger searchURL");
//     let dataFetch = await fetch(searchURL, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         Authorization: auth,
//       },
//     });
//     let parsedData = await dataFetch.json();
//     setFetchData(parsedData.photos);
//     setInput("");
//     setPage(2);
//     console.log(dataFetch);
//     console.log(parsedData);
//   }
// };

// const findPicFn = async () => {
//   setCurrent(input);
//   console.log("trigger findPic");
//   if (current.trim() === "") {
//     return searchFn(input, current, intialURL, searchURL);
//   }

//   let dataFetch = await fetch(searchURL, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       Authorization: auth,
//     },
//   });
//   let parsedData = await dataFetch.json();
//   setFetchData(parsedData.photos);
//   setInput("");
//   // console.log(dataFetch);
//   // console.log(parsedData);
// };
