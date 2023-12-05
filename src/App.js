import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import Patchnotes from './components/pages/Patch-notes';
import Bio from './components/pages/Bio';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/Patch-notes' element={<Patchnotes/>} />
          <Route path='/Bio' element={ <Bio/> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;