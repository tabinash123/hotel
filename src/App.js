import React from 'react'
import Hompage from './pages/Hompage'
import FooterComponent from './component/FooterComponent'
import HeaderComponent from './component/HeaderComponent'

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <Hompage />
      <FooterComponent />
    </div>
  )
}

export default App