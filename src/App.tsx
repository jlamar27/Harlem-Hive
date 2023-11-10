import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import HomeIndex from './pages/Home/HomeIndex';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <HomeIndex/>
      <Footer/>
    </div>
  );
}

export default App;
