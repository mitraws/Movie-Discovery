import React, { useState, useEffect } from "react";
import Axios from "axios";
import Title from "../Components/Title";
import { Link, useHistory, useParams } from "react-router-dom";

// export default function () {
// const {movieId} = useParams()
// console.log("Hello from Movies page", movieId)
// return <h1>HELLO {movieId}</h1>
// }
export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [appState, setAppState] = useState("");
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  const params = useParams();

//   console.log(params, "hi there!");

  const search = async (param) => {
    const val = param ? param : searchText;

    // console.log("Start searching for:", val);
    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL

    const queryParam = encodeURIComponent(val);
    setAppState("searching ...");
    const data = await Axios.get(
      `https://omdbapi.com/?apikey=a53e8892&s=${queryParam}`
    );
    // console.log("Success!", data);
    // console.warn("asdasdasd", data.data.Search);
    if (!data.data.Search) {
      setAppState("Could not find movie");
    } else {
      setAppState("Results for your search:");
      setMovies(data.data.Search);
    }
  };

  const navigateToSearch = async () => {
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);

    search();
  };

  useEffect(() => {
    if (params.searchtext !== undefined) {
      search(params.searchtext);
    }
  }, []);

  if (appState === "searching ...") {
    return <h1>Searching movies...</h1>;
  }

  return (
    <div>
      <Title subtitle="Discover some movies!">Hello!</Title>

      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
          onKeyDown={e => {
            if(e.keyCode === 13){
                search()
              // console.log('Hi, a user hit enter!')
            }
          }}
        />
        <button onClick={navigateToSearch}>Search</button>
      </p>

      <p>{appState}</p>

      {movies.map((movie) => {
        // console.log(movie);
        return (
          <div className="movie" key={movie.imdbID}>
            <h4>
              {movie.Title} ({movie.Year})
            </h4>
            <p>
              <Link to={`/moviePage/${movie.imdbID}`}>View details</Link>
            </p>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        );
      })}
    </div>
  );
}
