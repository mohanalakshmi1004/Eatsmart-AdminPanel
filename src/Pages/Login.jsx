import React, { useState } from 'react'

const Login = ({ onSuccess }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const ADMIN_EMAIL = 'admin@eatsmart'
    const ADMIN_PASS = 'mohana@461'

    if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
      // mark admin as authenticated
      localStorage.setItem('adminAuth', 'true')
      setError('')
      if (onSuccess) onSuccess()
    } else {
      setError('Invalid admin credentials')
    }
  }

  return (
    <div style={{display:'flex',minHeight:'100vh',alignItems:'center',justifyContent:'center',background:'#f5f5f7'}}>
      <form onSubmit={handleSubmit} style={{background:'#fff',padding:30,borderRadius:8,boxShadow:'0 4px 20px rgba(0,0,0,0.08)',width:360}}>
        <h2 style={{marginBottom:16}}>Admin Login</h2>
        <div style={{marginBottom:12}}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{width:'100%',padding:10,borderRadius:4,border:'1px solid #ddd'}}
          />
        </div>
        <div style={{marginBottom:12}}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{width:'100%',padding:10,borderRadius:4,border:'1px solid #ddd'}}
          />
        </div>
        <button type="submit" style={{width:'100%',padding:10,background:'#007bff',color:'#fff',border:'none',borderRadius:4}}>Login</button>
        {error && <p style={{color:'red',marginTop:12}}>{error}</p>}
      </form>
    </div>
  )
}

export default Login
