import React from 'react'
import './navbar.css'
import navlogo from '../../assets/shopping.png'
import profile from '../../assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="navlogo" />
        <img src={profile} alt="" className='navprofile'/>
    </div>
  )
}

export default Navbar