import React from 'react'
import '../../Components/Welcome/Welcome.css'
import logo from '../../assets/image.png'

const Welcome = () => {
  return (
    <section className='welcome'>
        <div className='welcome-logo'>
            <img src={logo} alt="hello" />
        </div>
        <div className="welcome-text">
            <div className="child-1">
                <h1>Welcome to <span>Dariyav</span> </h1>
                <p>SDGPL serves Indian market with quality tested glass which ensures safety and efficient installation. Glass is an object that lightens the weight of constructing any infrastructure.

With our dedication and skills, we provide best services to meet requirements of clients. Our values are based on our actual beliefs and practice.</p>
            </div>
            <div className="child-2">
                <div className="info">
                    <h6>Years of Experience</h6>
                    <p>25+</p>
                </div>
                <div className="info">
                    <h6>Number of Awards</h6>
                    <p>40+</p>
                </div>
                <div className="info">
                    <h6>Team Members</h6>
                    <p>750+</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Welcome
