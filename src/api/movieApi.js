const key = "721167a7";

async function movieApi(name) {
  return fetch(`https://www.omdbapi.com/?apikey=${key}&s=${name}`)
  .then((response) => response.json())
  .then((data) => {
    sessionStorage.setItem("movies", JSON.stringify(data.Search || []));
    if (data.Search) {
      return data.Search; // Повертаємо список фільмів
    } else {
      alert("No movies found!")
      return [];
    }
  })
  .catch((error) => {
    console.error("Error:", error);
    return [];
  });
}

export default movieApi;