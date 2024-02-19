import React from 'react'
import { Link } from 'react-router-dom'
import './PickUpCust.css'
import delivering from './delivering.png'

function PickUpCust() {
  return (
    <div className='pickup-cust-container'>
      <h2>Picking Up from Customer</h2>
      <img src={delivering}></img>
      <div className='pickup-cust-detail-container'>
      <h3>Your Customer Details</h3>
        <h3>Name: Bryan</h3>
        <h3>Phone: 0651086400</h3>
        <h3>Date: 20/2/2024</h3>
        <h3>Order Number: 0050</h3>
        <h3>Pick Up Time: 5:00 PM</h3>
        <h3>Location: Bang Bo, Samut Prakan, 10560, Origin Place Abac Bangna, 7th Floor</h3>
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
