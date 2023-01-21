import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = (props) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`search/${query}`);
  };

  return (
    <div className="SearchBarContainer">
      <form onSubmit={handleClick} className="SearchBar">
        {/* <label className="searchLabel">Search For Videos: </label> */}
        {/* <span class="fa fa-search form-control-feedback"></span> */}
        <input
          className="searchInput"
          placeholder="Search"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        ></input>
        <button type="submit" className="searchButton">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
