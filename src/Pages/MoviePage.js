import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../Components/Title";
import axios from "axios";
import { Link } from "react-router-dom";


export default function MoviePage() {
  const params = useParams();
  const [movie, setMovie] = useState({});

  console.log("Hello from movie page, params?", params);
useEffect(() => {
   const fetchData = async (imdbID)  => {
      console.log("Hello from useEffect, ID?", imdbID);
      const data = await axios.get(
        `https://omdbapi.com/?apikey=a53e8892&i=${imdbID}`
      );
      console.log("Hello from data fetch, data?", data);
      setMovie(data.data);
    }
    fetchData(params.imdbID); 
    console.log("Hello from asyncFunction, params.imdbID?", fetchData);
  }, []);

  // to not render anything until data is fetched
  if (!movie.Title) { return null }

  return (
    <div>
      <Title>{movie.Title} ({movie.Year})</Title>
      <img src={movie.Poster} alt={movie.Title}/>
      <p>{movie.Plot}</p>
      <p><Link to="/discover">Search for another movie</Link></p>
    </div>
  );
}
