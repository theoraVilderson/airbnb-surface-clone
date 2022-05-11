import { SearchIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import "./SearchBox.css";
function SearchBox() {
  const [searchText, setSearchText] = useState("");
  function submitHandler(e) {
    !e.preventedDefault && e.preventDefault();
    // subiting the search getting result and update the text;
  }
  return (
    <form
      className="searchBox"
      action="/"
      method="post"
      onSubmit={submitHandler}
    >
      <div className="searchBox__container">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="search..."
          name="searchText"
          type="search"
          className="browser-default"
        />
        <button className="searchBox__icon" type="submit">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
