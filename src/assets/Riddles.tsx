import { useEffect } from "react";
import "../styles/Riddles.css";

const Riddles = () => {
  useEffect(() => {
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy
    fetch("/api/get_bucket").then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        console.log(data);
      })
    );
  }, []);

  return (
    <div id="riddles">
      <h1 id="riddle-title">Riddles</h1>
      <ol type="A">
        <li className="riddle" key="A">
          hello
        </li>
        <li className="riddle" key="B">
          there
        </li>
      </ol>
    </div>
  );
};

export default Riddles;
