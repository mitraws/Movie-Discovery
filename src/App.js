import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import DiscoverMoviesPage from "./Pages/DiscoverMoviesPage";

function App() {
  return (
    <div className="App">
      {/* <nav> */}
        <Navbar />
        {/* </nav> */}
        <header className="App-header">
        <Switch>
          <Route path="/Discover" component={DiscoverMoviesPage} />
          <Route path="/Discover/:movieId" component={DiscoverMoviesPage} />
          <Route path="/AboutPage" component={AboutPage} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="*" component={HomePage} />
        </Switch>
        </header>
    </div>
  );
}

export default App;
