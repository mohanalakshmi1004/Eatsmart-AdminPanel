import React from 'react'
import './navbar.css'
import navlogo from '../../assets/shopping.png'
import profile from '../../assets/nav-profile.svg'
const Navbar = () => {
  const isAdmin = localStorage.getItem('adminAuth') === 'true'

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    // reload so App can re-check auth
    window.location.reload()
  }

  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="navlogo" />
        <img src={profile} alt="" className='navprofile'/>
        {isAdmin && (
          <button className="nav-logout" onClick={handleLogout} style={{marginLeft:12,padding:'6px 12px',borderRadius:6,border:'none',background:'#ff4d4f',color:'#fff'}}>Logout</button>
        )}
    </div>
  )
}

export default Navbar