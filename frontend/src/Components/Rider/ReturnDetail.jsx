import React from 'react'
import { Link } from 'react-router-dom'
import './ReturnDetail.css'

function ReturnDetail() {
  return (
    <div className='return-detail-container'>
      <h1>Return Detail</h1>
      <div className='return-detail-detail-container'>
        <h3>Name: Brandon</h3>
        <h3>Phone: 123456789</h3>
        <h3>Date: 11/2/2024</h3>
        <h3>Order Number: 12345</h3>
        <h3>Pick Up Time: 5:00 pm</h3>
        <h3>Location: The porch</h3>
      </div>
      <div className='return-detail-btn-container'>
        <button className='return-detail-btn'>
          <Link
            className='return-detail-link'
            to='/Rider/RiderHomeScreen/RiderInfoReturn/ReturnDetail/ReturnCust'
          >
            Return to customer
          </Link>
        </button>
        <button className='return-detail-btn'>
          <Link className='return-detail-link'>Cancel</Link>
        </button>
      </div>
    </div>
  )
}

export default ReturnDetail
