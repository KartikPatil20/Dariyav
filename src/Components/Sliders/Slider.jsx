import React, { useEffect, useState } from 'react'
import '../Sliders/Slider.css'
import img1 from '../../assets/slider-1.png'
import img2 from '../../assets/slider-2.png'

const Slider = () => {

  const gb = [img1, img2];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === gb.length-1 ? 0: prev+1));
    }, 5000);
    return () => clearInterval(interval);
  },[currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === gb.length-1 ? 0 : prev+1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? gb.length-1 : prev-1));
  }

  return (
    <>
      <div className='Hero-container'>

        <i class="fi fi-rs-angle-small-left left" onClick={prevSlide}></i>

        <section  className= {`Hero  `} style={{
              backgroundImage: `url(${gb[currentSlide]})`
            }}>
    
              <div className="hero-child">
                <h2>Major Project</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate dolorum explicabo maiores magni distinctio laborum labore iste cumque minima! Blanditiis assumenda obcaecati temporibus vero pariatur voluptas cupiditate aperiam velit.</p>
                <button>Learn More</button>
              </div>
              <div className="hero-img">
                <img src={`${gb[currentSlide]}`} alt="Project" />
              </div>
            </section>

        <i class="fi fi-rs-angle-small-right right" onClick={nextSlide}></i>

      </div>
    </>

  )
}

export default Slider
