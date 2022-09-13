import './NavBar.css'
import React from 'react'
import Skull from '../../assets/skull.png'

const NavBar = () => {
  return (
    <div className='nav-container'>
      <h1 className='title'>MoodTunes</h1>
      <img className='skull' src={Skull}/>
    </div>
  )
}

export default NavBar
