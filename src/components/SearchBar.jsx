import React, { useState } from "react";
import "./css/SearchBar.css";
import findGlass from "../images/findGlass.svg"
import movieApi from "../api/movieApi.js"

function SearchBar() {
  //tracking input
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value); 
  };
  // button function 
  const handleClick = () => {
    movieApi(inputValue);
  }
    return (
      <>
      <div className="searchContrainer">
        <input className="searchInput" type="text" value={inputValue} onChange={handleChange} placeholder="Write the name of the movie"/>
        <button onClick={handleClick} className="searchButton"><img className="imgButton" src={findGlass} alt="search Lupa Button" /></button>
      </div>
      </>
    )
  }
  
  export default SearchBar;
  