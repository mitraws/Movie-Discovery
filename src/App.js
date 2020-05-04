import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import DiscoverMoviesPage from "./Pages/DiscoverMoviesPage";
import MoviePage from "./Pages/MoviePage";

function App() {
  return (
    <div className="App">
      {/* <nav> */}
        <Navbar />
        {/* </nav> */}
        <header className="App-header">
        <Switch>
          <Route exact path="/Discover/:searchtext?" component={DiscoverMoviesPage} />
          <Route path="/moviePage/:imdbID" component={MoviePage} />
          <Route path="/AboutPage" component={AboutPage} />
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="*" component={HomePage} /> */}
        </Switch>
        </header>
    </div>
  );
}

export default App;
