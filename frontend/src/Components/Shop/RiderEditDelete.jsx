import React, { useState, useEffect } from 'react'
import './RiderEditDelete.css'
import avatar from '../../Components/Rider/avatar.jpg'
import { useParams } from 'react-router'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Profile = () => {
  const { id } = useParams()
  const [orderApi, setOrderApi] = useState([])
  const [userName, setUserName] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const getOrders = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/shop/riders/${id}`
        )
        setOrderApi(data)
        // Update state here after data is fetched
        setUserName(data[0]?.rider_name || '') // Use optional chaining and fallback to an empty string
        setUserPhone(data[0]?.rider_number || '')
        setUserEmail(data[0]?.rider_email || '')
        console.log(data)
      } catch (err) {
        alert('cannot get data')
        console.log(err)
      }
    }

    getOrders()
  }, [id]) // Dependency array, re-run if id changes

  const handleUserNameChange = (e) => {
    setUserName(e.target.value)
  }

  const handleUserPhoneChange = (e) => {
    setUserPhone(e.target.value)
  }

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value)
  }
  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/shop/updaterider/${id}`,
        {
          rider_name: userName,
          rider_number: userPhone,
          rider_email: userEmail,
        }
      )
      console.log('Update successful:', response.data)
      navigate(`/shop/home`)
    } catch (err) {
      console.error('Update failed:', err)
      alert('cannot get data')
      navigate(`/shop/home`)
    }
  }

  const handleDeleteSubmit = async () => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/api/shop/deleterider/${id}`
      )
      // navigate(`Rider`)
      console.log(data)
    } catch (err) {
      alert('cannot get data')
      console.log(err)
    }
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
        <button onClick={handleSubmit} className='save-btn'>
          Save changes
        </button>
        <button onClick={handleDeleteSubmit} className='delete-btn'>
          Delete Account
        </button>
      </div>
    </div>
  )
}

export default Profile
