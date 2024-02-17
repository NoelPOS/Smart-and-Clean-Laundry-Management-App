import React from 'react'
import './PickUpSuccess.css'
import { Link } from 'react-router-dom'

function PickUpSuccess() {
  return (
    <div className='pick-success'>
      <h1>Pick Up Successful</h1>

      <button>
        <Link to='/Rider/RiderHomeScreen'>Home Page</Link>
      </button>
    </div>
  )
}

export default PickUpSuccess
