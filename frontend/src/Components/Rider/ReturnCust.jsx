import React from 'react'
import { Link } from 'react-router-dom'
import './ReturnCust.css'
import delivering from './delivering.png'

function ReturnCust() {
  return (
    <div className='return-cust-container'>
      <h2>Returning to Customer</h2>
      <img src={delivering}></img>
      <div className='return-cust-detail-container'>
        <h3>Your Customer Details</h3>
        <h3>Name: Johnson</h3>
        <h3>Phone: 0960090059</h3>
        <h3>Date: 18/2/2024</h3>
        <h3>Order Number: 0040</h3>
        <h3>Pick Up Time: 7:00 pm</h3>
        <h3>Location: Bang Bo, Samut Prakan, 10560, The Rich Abac, 4th Floor</h3>
      </div>
      <div className='return-cust-btn-container'>
        <button className='return-cust-btn'>
          <Link
            className='return-cust-link'
            to='/Rider/RiderHomeScreen/RiderInfoReturn/ReturnDetail/ReturnCust/ReturnSuccess'
          >
            Success Return
          </Link>
        </button>
        <button className='return-cust-btn'>
          <Link
            to='/Rider/RiderHomeScreen/RiderInfoReturn/ReturnDetail/ReturnCust/ReportForm'
            className='return-cust-link'
          >
            Fail Return
          </Link>
        </button>
      </div>
    </div>
  )
}

export default ReturnCust
