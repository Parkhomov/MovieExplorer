import React, { useState } from "react";
import "./css/SearchBar.css";
import findGlass from "../images/findGlass.svg";
import movieApi from "../api/movieApi.js";



function SearchBar({onSearch}) {
  //tracking input
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value); 
  };
  // button function 
  const handleClick = () => {
    if (inputValue.trim()) {
      movieApi(inputValue)
        .then((movies) => {
          if (typeof onSearch === "function") {
            onSearch(movies);
          } else {
            console.error("onSearch is not a function");
          }
        })
        .catch((error) => console.error("Error fetching movies:", error));
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
    return (
      <> 
      <div className="searchContrainer">
        <input className="searchInput" type="text" value={inputValue} onChange={handleChange}  onKeyDown={handleKeyDown} placeholder="Write the name of the movie"/>
        <button onClick={handleClick} className="searchButton"><img className="imgButton" src={findGlass} alt="search Lupa Button" /></button>
      </div>
      </>
    )
  }
  
  export default SearchBar;
  