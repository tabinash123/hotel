import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import Homepage from './pages/Hompage';
import About from './pages/About';
import Room from './pages/Room';
import Gallary from './pages/Gallary';
import TourPack from './pages/TourPack';
import Event from './pages/Event';
import Contact from './pages/Contact';


const App = () => {
  return (
    <Router>
      <div>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/room" element={<Room />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/tour" element={<TourPack />} />
          <Route path="/event" element={<Event />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  
  );
};

export default App;
