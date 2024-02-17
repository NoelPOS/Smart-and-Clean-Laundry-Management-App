import React from 'react'
import './ReturnSuccess.css'
import { Link } from 'react-router-dom'

function ReturnSuccess() {
  return (
    <div className='return-success'>
      <h1>Return Successful</h1>

      <button>
        <Link to='/Rider/RiderHomeScreen'>Home Page</Link>
      </button>
    </div>
  )
}

export default ReturnSuccess
