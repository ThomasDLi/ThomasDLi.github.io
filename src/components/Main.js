import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/projects' element={<Projects />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
  );
}

export default Main;