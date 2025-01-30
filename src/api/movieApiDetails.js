const key = "721167a7";

async function movieApiDetails () {
    const selMovie = JSON.parse(sessionStorage.getItem("selectedMovie"));
    const movieId = selMovie.imdbID;
    return fetch(`https://www.omdbapi.com/?apikey=${key}&i=${movieId}&plot=full$`)
    .then((response) => response.json())
    .then((data) => sessionStorage.setItem("details", JSON.stringify(data)));
} 

export default movieApiDetails;
