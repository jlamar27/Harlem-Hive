import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomeIndex from './components/pages/Home/HomeIndex';

function App() {
  return (
    <div className="app">
      <Navbar />
      <HomeIndex/>
    </div>
  );
}

export default App;
