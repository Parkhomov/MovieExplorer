import "./css/MovieCard.css";
import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar.jsx";
import { useNavigate } from "react-router-dom";
import movieApiDetails from "../api/movieApiDetails.js";
import movieApiYoutube from "../api/movieApiYoutube.js";



function MCard() { 
    const [movies, setMovies] = useState([]); // Стан для зберігання даних
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState({}); // Стан для відстеження
   
    const handleSearch = (movieData) => {
      setMovies(movieData); // Оновлюємо стан отриманими даними
    };
    useEffect(() => {
      const storedMovies = JSON.parse(sessionStorage.getItem("movies"));
      if (storedMovies) {
        setMovies(storedMovies);
      }
    }, []);
    const handleDivClick = (movieTitle) => {
      movieApiYoutube(movieTitle);
      setTimeout(() => {
        navigate("/Details"); 
      }, 500);
    };
    const handleMoveDiv = (movie) => {
      sessionStorage.setItem("selectedMovie", JSON.stringify(movie));
      movieApiDetails();
    }
   
        
  return (
    <> 
      <SearchBar onSearch={handleSearch}/>
        
            {movies.map((movie) => (
              <div onClick={() => handleDivClick(movie.Title)} onMouseOver={() =>handleMoveDiv(movie)} key={movie.imdbID} className="movie-card">
                <h3>Title: {movie.Title}</h3>
                <p>Year: {movie.Year}</p>
                <p>Type: {movie.Type}</p>
                <img src={movie.Poster} alt={movie.Title} className="moviePoster"/>
              </div>
            ))}
            
        
  
    </>
  );
};

export default MCard;






// class ButtonElement {
//     text;
//     className;
//     role;
//     type = "button";
//     constructor(text, className) {
//         this.text = text;
//         this.className = className;
//         this.role = "button";
//     }
//     create() {
//         const button = document.createElement("button");
//         button.textContent = this.text;
//         button.setAttribute("role", this.role);
//         button.setAttribute("type", this.type);
//         this.className.forEach(item => button.classList.add(item));
//         return button;
//     }
// }
// const b_03 = new ButtonElement("Push me", ["btn", "btn-primary"]);
// console.log(b_03);
// document.body.append(b_03.create());