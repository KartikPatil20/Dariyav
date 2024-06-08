import React from 'react'
import '../Footer/Footer.css'
import logo from '../../assets/image.png'

const Footer = () => {
  return (
    <footer>
     <div className="footer-detail">
     <div className="footer-logo">
        <img src={logo} alt="Dariyav" />
        <div className="logo-icons">
        <a href="mailto:info@dariyav.com"><ion-icon name="mail-outline"></ion-icon></a>
        <a href="https://maps.app.goo.gl/UVzahwq13MyBcnbT8" target='_blank'><ion-icon name="location-outline"></ion-icon></a>
        
        </div>
      </div>
      <div className="footer-about">
        <h1>About Company</h1>
        <div className="about-section" id="section-1">
          <ul>
            <li>Our Investors</li>
            <li>Recent Projects</li>
            <li>Code of Conduct</li>
            <li>Latest News</li>
            <li>Job / Career</li>
          </ul>
          <ul>
          <li>Service Provide</li>
            <li>Our responsibility</li>
            <li>About Company</li>
            <li>Testimonials</li>
            <li>Contact info</li>
          </ul>
        </div>
      </div>
      <div className="footer-contact">
        <h1>Contact Us</h1>
        <div className="contact-details">
          <h3>Sachin B. Limba</h3>
          <a href="mailto:sachin@dariyav.com"><ion-icon name="mail-outline"></ion-icon></a>
          <a href="tel:+919978650541"><ion-icon name="call-outline"></ion-icon></a>
        </div>
        <div className="contact-details">
          <h3>Amit B. Limba</h3>
        <a href="mailto:amit@dariyav.com"><ion-icon name="mail-outline"></ion-icon></a>
        <a href="tel:+919726550541"><ion-icon name="call-outline"></ion-icon></a>
        </div>
      </div>
     </div>
      <h4 className='Reserved'>
        &copy; 2020,Shree Dariyav Glasstech Pvt Ltd. All rights reserved
      </h4>
    </footer>
  )
}

export default Footer
