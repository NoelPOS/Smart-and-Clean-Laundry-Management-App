import React from 'react'
import { Link } from 'react-router-dom'
import './ReturnDetail.css'

function ReturnDetail() {
  return (
    <div className='return-detail-container'>
      <h1>Return Detail</h1>
      <div className='return-detail-detail-container'>
        <h3>Name: Johnson</h3>
        <h3>Phone: 0960090059</h3>
        <h3>Date: 18/2/2024</h3>
        <h3>Order Number: 0040</h3>
        <h3>Pickup Time: 7:00 PM</h3>
        <h3>Location: Bang Bo, Samut Prakan, 10560, The Rich Abac, 4th Floor</h3>
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
          <Link 
          className='return-detail-link' 
          to='/Rider/RiderHomeScreen/RiderInfoReturn'
          >
            Cancel
          </Link>
        </button>
      </div>
    </div>
  )
}

export default ReturnDetail
