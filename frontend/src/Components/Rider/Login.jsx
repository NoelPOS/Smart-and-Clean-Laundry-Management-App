import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import ShopHeader from '../Common/ShopHeader'

const Login = () => {
  // Use state for managing input values
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // Handle input changes
  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <>
      <ShopHeader />
      <div className='login-container'>
        <div className='form-container'>
          <form>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              name='username'
              value={username}
              onChange={handleUsernameChange}
            />

            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={handlePasswordChange}
            />

            {/* <div className='forgot-password'>
              <a href='/forgot-password'>Forgot Password?</a>
            </div> */}

            <button type='submit'>
              <Link className='login-text' to='/Rider/RiderHomeScreen'>
                Login
              </Link>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
