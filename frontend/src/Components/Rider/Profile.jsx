import React, { useState } from 'react'
import './Profile.css'
import avatar from './avatar.jpg'

const Profile = () => {
  const [userName, setUserName] = useState('Rider - Pen')
  const [userPhone, setUserPhone] = useState('0651086403')
  const [userEmail, setUserEmail] = useState('pen@gmail.com')

  const handleUserNameChange = (e) => {
    setUserName(e.target.value)
  }

  const handleUserPhoneChange = (e) => {
    setUserPhone(e.target.value)
  }

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value)
  }

  return (
    <div className='user-profile'>
      <div className='avatar-container'>
        <img src={avatar} alt='User Avatar' className='user-avatar' />
      </div>
      <div className='user-info'>
        <div className='user-name'>
          <input type='text' value={userName} onChange={handleUserNameChange} />
        </div>
        <div className='user-phone'>
          <input
            type='text'
            value={userPhone}
            onChange={handleUserPhoneChange}
          />
        </div>
        <div className='user-email'>
          <input
            type='text'
            value={userEmail}
            onChange={handleUserEmailChange}
          />
        </div>
      </div>
      <div className='user-actions'>
        <button className='save-btn'>Save changes</button>
        <button className='delete-btn'>Delete Account</button>
      </div>
    </div>
  )
}

export default Profile
