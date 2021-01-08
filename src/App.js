import React from 'react';
import './App.css';
import Anime from './Anime';
import League from './League';
import Nav from './Nav';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home}/>
      <Route path="/League" component={League}/>
      <Route path="/Anime" component={Anime}/>  
    </div>
    </Router>
  );
}

const Home = () => (
  <headpage>
  <div>
    <h1>Homepage</h1>
  </div>
  </headpage>
)

export default App;
