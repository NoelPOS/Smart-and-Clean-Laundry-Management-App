import React from 'react'
import { Link } from 'react-router-dom'
import './PickUpCust.css'

function PickUpCust() {
  return (
    <div className='pickup-cust-container'>
      <h2>Picking Up from Customer</h2>
      <div className='pickup-cust-detail-container'>
        <h3>Your Customer Details</h3>
        <h3>Name: Brandon</h3>
        <h3>Phone: 123456789</h3>
        <h3>Date: 11/2/2024</h3>
        <h3>Order Number: 12345</h3>
        <h3>Pick Up Time: 5:00 pm</h3>
        <h3>Location: The porch</h3>
      </div>
      <div className='pickup-cust-btn-container'>
        <button className='pickup-cust-btn'>
          <Link
            className='pickup-cust-link'
            to='/Rider/RiderHomeScreen/RiderInfo/PickUpDetail/PickUpCust/PickUpSuccess'
          >
            Success Pick Up
          </Link>
        </button>
        <button className='pickup-cust-btn'>
          <Link
            className='pickup-cust-link'
            to='/Rider/RiderHomeScreen/RiderInfo/PickUpDetail/PickUpCust/ReportForm'
          >
            Fail Pick Up
          </Link>
        </button>
      </div>
    </div>
  )
}

export default PickUpCust
