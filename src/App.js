import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Search from './components/Search';
import Selection from './components/Selection'
import Carousel from './components/Carousel';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selection />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
