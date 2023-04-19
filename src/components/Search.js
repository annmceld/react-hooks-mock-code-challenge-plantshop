import React from "react";

function Search({filterSelectedPlants}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={filterSelectedPlants}
      />
    </div>
  );
}

export default Search;
