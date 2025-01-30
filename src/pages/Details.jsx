import "./css/Details.css";


function Details() {
  let movie = JSON.parse(sessionStorage.getItem("details"))
    return (
      <>
       
              <div key={movie.imdbID} className="detailsContainer">
                <h3>Title: {movie.Title}</h3>
                <p>Year: {movie.Year}</p>
                <p>Type: {movie.Type}</p>
                <img src={movie.Poster} alt={movie.Title} className="Details-poster"/>
              </div>
          
        
      </>
    )
  }
export default Details;