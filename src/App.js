import React from 'react'
// import Hompage from './pages/Hompage'
import FooterComponent from './component/FooterComponent'
import HeaderComponent from './component/HeaderComponent'
import About from './pages/About';
import Room from './pages/Room';

const App = () => {
  return (
    <div>
      <HeaderComponent />
      {/* <Hompage /> */}
      {/* <Room /> */}
      <About />
      <FooterComponent />
    </div>
  )
}

export default App