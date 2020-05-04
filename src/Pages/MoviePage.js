import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from '../Components/Title';
import axios from "axios";

export default function MoviePage() {
  const params = useParams();
  const [movieData, setMovie] = useState();

  console.log("Hello from movie page", params);
  return <Title subtitle="Welcome to Movie">Hello!</Title>

  // useEffect(() => {
  //   async function fetchMovieById(imdbID) {
  //     console.log("DO I HAVE ANY ID?", imdbID);
  //     const response = await axios.get(
  //       `http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=a53e8892`
  //     );
      
  //     console.log(response.data);
  //     setMovie(response.data);
  //   }
  //   fetchMovieById(params.imdbID);
  // }, [])
}