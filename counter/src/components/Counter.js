import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [counterInfo, setCounterInfo] = useState({
    incrementCount: 0,
    decrementCount: 0,
  });

  const handlePlus = () => {
    setCount(count + 1);
    setCounterInfo({
      ...counterInfo,
      incrementCount: counterInfo.incrementCount + 1,
    });
  };

  const handleMinus = () => {
    setCount(count - 1);
    setCounterInfo({
      ...counterInfo,
      decrementCount: counterInfo.decrementCount + 1,
    });
  };

  return (
    <>
      <button onClick={handlePlus}>+</button>
      <span>{count}</span>
      <button onClick={handleMinus}>-</button>
      <div>
        <p>Increments: {counterInfo.incrementCount}</p>
        <p>Decrements: {counterInfo.decrementCount}</p>
      </div>
    </>
  );
}
