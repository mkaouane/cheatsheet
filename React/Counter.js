import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [counter,setCounter] = useState(0)
  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    if(counter < 1){
      return counter;
    } else setCounter(counter-1)
  }
  return <div className="App">

    <button onClick={decrement}>-</button> {counter} <button onClick={increment}>+</button>
  </div>;
}
