import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom' // Import Link from 'react-router-dom'
import './Register.css'

const Register = () => {
  const navigate = useNavigate()
  const [riderName, setRiderName] = useState('')
  const [riderEmail, setRiderEmail] = useState('')
  const [riderNumber, setRiderNumber] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8080/api/shop/rider/signup', {
        riderName, // Assuming this is the ID or unique username
        riderEmail,
        riderNumber,
        rider_password: password,
      })
      navigate('login') // Redirect to login upon successful registration
    } catch (error) {
      console.error(error) // Handle error
    }
  }

  const handleGoToLogin = () => {
    navigate('login') // Adjust the path as necessary
  }

  return (
    // Inside the return statement of Register.jsx
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rider Name:</label>
          <input
            type='text'
            value={riderName}
            onChange={(e) => setRiderName(e.target.value)}
          />
        </div>
        <div>
          <label>Rider Email:</label>
          <input
            type='email'
            value={riderEmail}
            onChange={(e) => setRiderEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Rider Number:</label>
          <input
            type='text'
            value={riderNumber}
            onChange={(e) => setRiderNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Register</button>
      </form>

      <p>
        Already have an account?{' '}
        <button className='go-to-login-btn' onClick={handleGoToLogin}>
          Go to Login
        </button>
      </p>
    </div>
  )
}

export default Register
