import React from "react";
import "./App.css";
import Anime from "./Anime";
import League from "./League";
import Nav from "./Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

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
      <h3 className="picstyle">Anime Hype</h3>
    </Link>
    <Link to="/League">
      <h3 className="picstyle">League Hype</h3>
    </Link>
  </div>
);

export default App;
