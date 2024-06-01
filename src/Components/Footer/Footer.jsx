import React from 'react'
import '../Footer/Footer.css'
import logo from '../../assets/image.png'

const Footer = () => {
  return (
    <footer>
        <div className="footer-logo">
            <img src={logo} alt="Dariyav" />
        </div>
        <div className="footer-about">
            <h1>About Company</h1>
        </div>
        <div className="footer-contact">
            <h1>Contact Us</h1>
        </div>
    </footer>
  )
}

export default Footer
