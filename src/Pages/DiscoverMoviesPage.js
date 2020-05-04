import React, { useState } from "react";
import Axios from "axios";
import Title from "../Components/Title";
import { Link } from "react-router-dom";

// export default function () {
// const {movieId} = useParams()
// console.log("Hello from Movies page", movieId)
// return <h1>HELLO {movieId}</h1>
// }
export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [appState, setAppState] = useState("");
  const [movies, setMovies] = useState([]);

  const search = async () => {
    console.log("Start searching for:", searchText);

    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);

    //   // Option A: use the browser-native fetch function
    //   const data = await fetch(
    //     `https://omdbapi.com/?apikey=b3d9013d&s=${queryParam}`
    //   ).then(r => r.json());
    // Option B: use the `axios` library like we did on Tuesday
    setAppState("searching ...");
    const data = await Axios.get(
      `https://omdbapi.com/?apikey=a53e8892&s=${queryParam}`
    );
    console.log("Success!", data);
    setMovies(data.data.Search);
    setAppState("Results for your search:");
  };
  //

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
        />
        <button onClick={search}>Search</button>
      </p>

      <p>{appState}</p>

      {movies.map((movie) => {
        console.log(movie);
        return (
          <div className='movie'
          key={movie.imdbID}>
            <h4>
              {movie.Title} ({movie.Year})
            </h4>
            <p>
              <Link to={`/moviePage/${movie.imdbID}`}>View details</Link>
            </p>
            <img src={movie.Poster} alt={movie.Title}/>
          </div>
        );
      })}
    </div>
  );
}
