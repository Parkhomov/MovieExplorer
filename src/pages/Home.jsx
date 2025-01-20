import SearchBar from "../components/SearchBar";
import MCard from "../components/MovieCard";
import "./css/Home.css";
function Home() {
    return (
      <>
        <SearchBar/>
        <div className="homeContainer">
            <MCard />
        </div>
      </>
    )
  }
  export default Home;