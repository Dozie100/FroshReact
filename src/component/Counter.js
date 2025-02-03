import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(2);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  const handleDouble = () => {
    setCount(count * 2);
  };
  const handleSquare = () => {
    setCount(count ** 2);
  };
  const handleDivide = () => {
    setCount(count / 2);
  };
  const handleReset = () => {
    setCount(count === 0);
  };

  return (
    <div>
      <p
        className={
          count === 0
            ? "grey"
            : count >= 1 && count <= 100
            ? "green"
            : count < 0
            ? "red"
            : "blue"
        }
      >
        {count}
      </p>
      <div className="bots">
        <button onClick={handleIncrease} className="botn">
          increase
        </button>
        <button className="botn" onClick={handleDecrease}>
          decrease
        </button>
        <button className="botn" onClick={handleDouble}>
          Double
        </button>
        <button className="botn" onClick={handleSquare}>
          square
        </button>
        <button className="botn" onClick={handleDivide}>
          divided by 2
        </button>
        <button className="botn" onClick={handleReset}>
          reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
