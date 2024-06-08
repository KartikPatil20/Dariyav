import React from 'react'
import logo from '../../assets/image.png'
import '../Loader/Loader.css'

const Loader = () => {
  return (
    <div className='Loader'>
      <img src={logo} alt="loading..." id='png'/>
      <h1 className='loader-name'>Welcome User</h1>
    </div>
  )
}

export default Loader
