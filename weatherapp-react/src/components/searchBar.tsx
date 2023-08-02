import React, { FC, ReactElement } from "react";
import { FaSearch } from "react-icons/fa" 
import "./searchBar.css"

interface SearchBarProps{
    handleWeather: () => void;
}

const SearchBar: FC<SearchBarProps> = ({ handleWeather }) => {
    return (
      <div className="searchBar-div">
        <input type="search" name="" id="search-bar" placeholder="Search..." />
        <button className="search-btn" onClick={handleWeather}>
          <FaSearch />
        </button>
      </div>
    );
};

export default SearchBar;