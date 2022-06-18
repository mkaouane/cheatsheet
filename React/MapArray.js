import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const arrayList = ["1", "2", "3", "4", "5"];
  return (
    <div className="App">
      {arrayList.map((item) => (
        <div>
          {item}
        </div>
      ))}
    </div>
  );
}
