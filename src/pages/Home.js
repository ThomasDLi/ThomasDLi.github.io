import React from 'react';
import css from './Home.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div style={css} className="home">
      <h1>👋 Hey, I'm Thomas!</h1>
      <h2>I'm a software dev and a hardware tinkerer.</h2>
      <h2>I have skills in electronics, CS, DS, CAD, and more!</h2>
      <div style={css} className="links">
        <Link to="/projects"><h2>My Projects</h2></Link>
        <Link to="/contact"><h2>Contact me</h2></Link>
      </div>
    </div>
  );
}

export default Home;