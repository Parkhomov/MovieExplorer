import "./css/MovieCard.css";
import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar.jsx";



function MCard() { 
    const [movies, setMovies] = useState([]); // Стан для зберігання даних
   
    // const [divs, setDivs] = useState([]);
    // const addDiv= (id) => { 
    //       setDivs((prevDivs) =>[ 
    //         ...prevDivs,
    //          {id},
    //         ]);
    // };

    const handleSearch = (movieData) => {
      setMovies(movieData); // Оновлюємо стан отриманими даними
    };

    // useEffect(() => {
    //     const times = 4; // Кількість викликів
    //     for (let i = 0; i < times; i++) {
    //       const uniqueId = `${Date.now()}-${i}`; // Унікальний id
    //       addDiv(uniqueId);
    //     }
    //     }, []); 
        
  return (
    <> 
      <SearchBar onSearch={handleSearch}/>
        {/* {divs.map((div) => ( */}
        
            {movies.map((movie) => (
              <div key={movie.imdbID} className="movie-card">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title} />
              </div>
            ))}
            
        {/* ))
        } */}
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