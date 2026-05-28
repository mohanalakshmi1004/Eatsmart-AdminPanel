import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'
import Login from './Pages/Login'

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    setIsAdmin(auth === 'true')
  }, [])

  const handleLoginSuccess = () => {
    localStorage.setItem('adminAuth', 'true')
    setIsAdmin(true)
  }

  return (
    <div className="app-container">
      {!isAdmin ? (
        <Login onSuccess={handleLoginSuccess} />
      ) : (
        <>
          <Navbar />
          <div className="app-main">
            <Admin />
          </div>
        </>
      )}
    </div>
  )
}

export default App