import "./css/Details.css";


function Details() {
  let movie = JSON.parse(sessionStorage.getItem("details"))
  let trailer = sessionStorage.getItem("trailer");
    return (
      <>
       
              <div key={movie.imdbID} className="detailsContainer">
                <h1 className="details-title">Title: {movie.Title}</h1>
                <div className="poster-center"><img src={movie.Poster} alt={movie.Title} className="details-poster"/></div>
                <div className="details-description">
                  {movie.Ratings.map((rating) => (
                      <div className="ratings" key={rating.Source}>Rating: {rating.Source} {rating.Value}</div>
                    ))}
                  <h4 className="year">Year: {movie.Year}</h4>
                  <h4 className="type">Type: {movie.Type}</h4>
                  <p className="genre general">Genre: {movie.Genre}</p>
                  <p className="plot general">Plot: {movie.Plot}</p>
                  <p className="general">Runtime: {movie.Runtime}</p>
                  <p className="general">Director: {movie.Director}</p>
                  <p className="general">Country: {movie.Country}</p>
                  <p className="general">Released: {movie.Released}</p>
                  <p className="general">Actors: {movie.Actors}</p>
                  <p className="general">Awards: {movie.Awards}</p>
                  <p className="general">BoxOffice: {movie.BoxOffice}</p>
                </div>
                <div className="div-trailer">
                <h1 className="title-trailer">Movie Trailer</h1>
                  <iframe className="trailer"

                      src={trailer}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                  ></iframe>
                </div>
              </div>
          
        
      </>
    )
  }
export default Details;