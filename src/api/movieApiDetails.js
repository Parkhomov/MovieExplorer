const key = "721167a7";

async function movieApiDetails () {
    const selMovie = JSON.parse(sessionStorage.getItem("selectedMovie"));
    const movieId = selMovie.imdbID;
    return fetch(`https://www.omdbapi.com/?apikey=${key}&i=${movieId}&plot=full$`)
    .then((response) => response.json())
    .then((data) => console.log(data));
    //   if (data.Search) {
    //     return data.Search; // Повертаємо список фільмів
    //   } else {
    //     alert("No movies found!")
    //     return [];
    //   }
    // })
    // .catch((error) => {
    //   console.error("Error:", error);
    //   return [];
    // });
} 
movieApiDetails();
export default movieApiDetails;
