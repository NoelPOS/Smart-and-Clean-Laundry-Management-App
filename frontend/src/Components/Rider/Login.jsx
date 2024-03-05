import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import './Login.css'
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate() // Hook to allow redirection

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        'http://localhost:8080/api/shop/rider/login',
        {
          username,
          password,
        }
      )
      console.log(data)
      navigate(`/Rider/${data.rider_id}`)
    } catch (error) {
      alert('Wrong Credentials!')
      console.error(error.response.data) // Handle error (e.g., show message to the user)
    }
  }

  return (
    // Inside the return statement of Login.jsx
    <div className='container'>
      <h2>Rider Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rider-Email: </label>

          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
