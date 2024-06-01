import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Slider from './Components/Sliders/Slider'
import Welcome from './Components/Welcome/Welcome'
import Products from './Components/Products/Products'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Welcome />
      <Products />
      <Footer />
    </>
  )
}

export default App
