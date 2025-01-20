const key = "721167a7";

function movieApi(name) {
fetch(`https://www.omdbapi.com/?apikey=${key}&s=${name}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  fetch(`http://img.omdbapi.com/?apikey=${key}&s=${name}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
}


export default movieApi;