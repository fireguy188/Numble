import { useEffect, useState } from "react";
import "../styles/Bucket.css";
import FunnyNumber from "./FunnyNumber";

const Bucket = () => {
  const numbers = [];
  for (var i = 1; i < 100; i++) {
    numbers.push(
      <FunnyNumber
        key={i}
        num={i}
        color={
          "#" +
          Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0")
            .toUpperCase()
        }
        r={39 + Math.floor(Math.random() * 25)}
        delay={Math.random() * 5}
      ></FunnyNumber>
    );
  }

  const [revealed, setRevealed] = useState([]);

  useEffect(() => {
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy
    fetch("/api/get_revealed").then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        setRevealed(data);
      })
    );
  }, []);

  return (
    <>
      {numbers}
      <div className="bucket">
        <div id="bucket_window_container">
          {revealed.map(function (window, i) {
            console.log(window);
            if (i == -1) {
              return (
                <input className="bucket_window" type="text" key={i}></input>
              );
            } else {
              return (
                <input
                  className="bucket_window"
                  type="text"
                  key={i}
                  value={window}
                  disabled
                ></input>
              );
            }
          })}
          {/* <input className="bucket_window" type="text"></input>
          <input className="bucket_window" type="text"></input>
          <input className="bucket_window" type="text"></input>
          <input className="bucket_window" type="text"></input>
          <input className="bucket_window" type="text"></input>
          <input className="bucket_window" type="text"></input>
          <input className="bucket_window" type="text"></input>
          <input className="bucket_window" type="text"></input>
          <input className="bucket_window" type="text"></input>
          <input className="bucket_window" type="text"></input>
          <input className="bucket_window" type="text"></input>
          <input className="bucket_window" type="text"></input> */}
        </div>
      </div>
    </>
  );
};

export default Bucket;
