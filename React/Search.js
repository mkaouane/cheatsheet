import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const nameArray = ["Jean", "Mohamed", "Pierre", "Elise", "Wassila"];
  const [searchFilter, setSearchFilter] = useState(nameArray);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      return setSearchFilter(nameArray);
    }

    const filteredValues = nameArray.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setSearchFilter(filteredValues);
  };
  return (
    <div className="App">
      <div>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {searchFilter.map((item, index) => (
        <div key={index}>{item}</div> //Display each item
      ))}
    </div>
  );
}
