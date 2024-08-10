import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import Homepage from './pages/Hompage';
import About from './pages/About';
import Room from './pages/Room';

const App = () => {
  return (
    <Router>
      <div>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/room" element={<Room />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
};

export default App;
