import React, { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  let [counterInfo, setCounterInfo] = useState({
    incrementCount: 0,
    decrementCount: 0,
  });

  const handlePlus = () => {
    setCount(count + 1);
    setCounterInfo({
      ...counterInfo,
      incrementCount: counterInfo.incrementCount + 1
    });
  };

  const handleMinus = () => {
    setCount(count - 1);
    setCounterInfo({
      ...counterInfo,
      decrementCount: counterInfo.decrementCount + 1
    });
  };

  const resetBtn = () => {
    setCount(count = 0);
    setCounterInfo({
      ...counterInfo,
      decrementCount: counterInfo.decrementCount = 0,
      incrementCount: counterInfo.incrementCount = 0
    })
  }

  return (
    <>
      <button onClick={handlePlus}>+</button>
      <span>{count}</span>
      <button onClick={handleMinus}>-</button>
      <div>
        <p>Increments: {counterInfo.incrementCount}</p>
        <p>Decrements: {counterInfo.decrementCount}</p>
      </div>
      <button onClick={resetBtn}>Reset</button>
    </>
  );
}
