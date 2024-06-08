import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Slider from './Components/Sliders/Slider'
import Welcome from './Components/Welcome/Welcome'
import Products from './Components/Products/Products'
import Footer from './Components/Footer/Footer'
import Loader from './Components/Loader/Loader'
import Testimonials from './Components/Testimonials/Testimonials'

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
   setTimeout(() => {
    setIsLoading(false)
   }, 5000); 
  })

  return (
    <>
      
      { 
        isLoading ? <Loader /> : <>
      <Navbar />
      <Slider />
      <Welcome />
      <Products />
      <Testimonials />
      <Footer />
        </>
      }
    </>
  )
}

export default App