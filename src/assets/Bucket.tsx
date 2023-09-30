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
            let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            if (window == -1) {
              return (
                <div className="test">
                  <label htmlFor={i.toString()}>{alphabet.charAt(i)}</label>
                  <input
                    className="bucket_window"
                    type="text"
                    key={i}
                    id={i.toString()}
                  ></input>
                </div>
              );
            } else {
              return (
                <div className="test">
                  <label htmlFor={i.toString()}>{alphabet.charAt(i)}</label>
                  <input
                    className="bucket_window"
                    type="text"
                    key={i}
                    id={i.toString()}
                    value={window}
                    disabled
                  ></input>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Bucket;
