import React from 'react'
import { Link } from 'react-router-dom'
import './PickUpDetail.css'

function PickUpDetail() {
  return (
    <div className='pickup-detail-container'>
      <h1>Pick Up Detail</h1>
      <div className='detail-container'>
        <h3>Name: Brandon</h3>
        <h3>Phone: 123456789</h3>
        <h3>Date: 11/2/2024</h3>
        <h3>Order Number: 12345</h3>
        <h3>Pick Up Time: 5:00 pm</h3>
        <h3>Location: The porch</h3>
      </div>
      <div className='pickup-detail-btn-container'>
        <button className='pickup-detail-btn'>
          <Link
            className='pickup-detail-link'
            to='/Rider/RiderHomeScreen/RiderInfo/PickUpDetail/PickUpCust'
          >
            Pick up from customer
          </Link>
        </button>
        <button className='pickup-detail-btn'>
          <Link
            className='pickup-detail-link'
            to='/Rider/RiderHomeScreen/RiderInfo'
          >
            Cancel
          </Link>
        </button>
      </div>
    </div>
  )
}

export default PickUpDetail
