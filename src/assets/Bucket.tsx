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

  return (
    <>
      {numbers}
      <div className="bucket">
        <div id="bucket_window_container">
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
          <input className="bucket_window" type="text"></input>
          <input className="bucket_window" type="text"></input>
        </div>
      </div>
    </>
  );
};

export default Bucket;
