import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'
// import './App.css'

const App = () => {
  return (
      <div className="app-container">
        <Navbar />
        <div className="app-main">
          <Admin />
        </div>
      </div>
  )
}

export default App