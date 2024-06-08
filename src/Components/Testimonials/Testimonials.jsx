import React, { useState } from 'react'
import '../Testimonials/Testimonials.css'
import t1 from '../../assets/testi-1.png'
import t2 from '../../assets/testi-2.png'
import t3 from '../../assets/testi-3.png'
import t4 from '../../assets/testi-4.png'
import t5 from '../../assets/testi-5.png'

const Testimonials = () => {

  const img = [t1, t2, t3, t4, t5];

  return (
    <section className='Testimonials'>
        <div className="testi-slide">
          <img src={t1} alt="testimonials" />
          <img src={t2} alt="testimonials" />
          <img src={t3} alt="testimonials" />
          <img src={t4} alt="testimonials" />
          <img src={t5} alt="testimonials" />
          <img src={t1} alt="testimonials" />
          <img src={t2} alt="testimonials" />
          <img src={t3} alt="testimonials" />
          <img src={t4} alt="testimonials" />
          <img src={t5} alt="testimonials" />
        </div>
    </section>
  )
}

export default Testimonials
