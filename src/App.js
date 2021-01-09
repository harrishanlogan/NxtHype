import React from 'react';
import './App.css';
import Anime from './Anime';
import League from './League';
import Nav from './Nav';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div >
      <Nav />
      <Route path="/" exact component={Home}/>
      <Route path="/League" component={League}/>
      <Route path="/Anime" component={Anime}/>  
    </div>
    </Router>
  );
}

const Home = () => (  
  <div className="container">
    <h1 id="hometitle">WHAT ARE YOU HYPED FOR?</h1>
  </div>
)

export default App;
