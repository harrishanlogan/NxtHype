import React from "react";
import "./App.css";
import Anime from "./Anime";
import League from "./League";
import Nav from "./Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import animelogo from "./images/bganime.jpeg";
import leaguelogo from "./images/bglolanime.jpeg";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/League" component={League} />
        <Route path="/Anime" component={Anime} />
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="container">
    <Link to="/Anime">
      <img className="picstyle" src={animelogo} />
    </Link>
    <Link to="/League">
      <img className="picstyle" src={leaguelogo} />
    </Link>
  </div>
);

export default App;
