import React, { useState, useEffect } from "react";
import "./styles.css";

import mock from "./mock/likenow";

export default function App() {
  const [data, setData] = useState(mock);
  const [trueArray, setTrueArray] = useState([]);

  const filterGenres = () => {
    const selectedItem = "Esporte";
    // console.log(data);
    const genreArray = data.map((item) => item.owner);
    const includes = genreArray.map((genre) => genre.includes(selectedItem));

    const newArray = [];
    const isTrue = includes.forEach((val, index) => {
      if (val) {
        newArray.push(index);
        setTrueArray(newArray);
      }
      console.log(trueArray);
    });
  };

  useEffect(() => {
    filterGenres();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {trueArray.map((item, i) => (
        <p key={i}> {data[item].title} </p>
      ))}

      {/* {data.map((item, index) => (
        <div key={index}>
          <p> título: {item.title}</p>

          <p> gênero: {item.owner.join(" | ")}</p>
          <p style={{ borderBottom: "1px solid black" }}></p>
        </div>
      ))} */}
    </div>
  );
}
