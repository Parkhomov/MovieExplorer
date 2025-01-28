import movieApiDetails from "../api/movieApiDetails";
import "./css/Details.css";

function Details() {
  const idMovie = JSON.parse(sessionStorage.getItem("selectedMovie"));
  const k = idMovie.Title;
    return (
      <>
        <div className="detailsContainer">
          <h1>{k}</h1>
        </div>
      </>
    )
}

export default Details;