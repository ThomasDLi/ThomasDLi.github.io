import React from 'react';
import css from './Home.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div style={css} className="home">
      <h1>👋 Hey, I'm Thomas!</h1>
      <h2>I program computers, design circuts, create products, and I'm interested in everything tech.</h2>
      <h2>When I'm not staring at my screen, I love to bike, paint, and make music.</h2>
      <h2>Please Consider checking out <Link to="/projects">my projects</Link> or <Link to="/contact">contacting me</Link>!</h2>
    </div>
  );
}

export default Home;