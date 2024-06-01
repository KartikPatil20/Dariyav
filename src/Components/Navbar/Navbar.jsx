import React from 'react'
import '../Navbar/Navbar.css'
import logo from '../../assets/image.png'

const Navbar = () => {
  return (
    <nav>
        <div className="img-container">
          <img src={logo} alt="Dariyav" />
        </div>
        <div className="child-container">
          <a href="">HOME</a>
          <a href="">ABOUT US</a>
          <a href="">OUR PRODUCTS</a>
          <a href="">CONTACT US</a>
          <a href="">CAREER</a>
        </div>
    </nav>
  )
}

export default Navbar
