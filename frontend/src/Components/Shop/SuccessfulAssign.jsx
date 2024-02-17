import React from 'react'
import ShopHeader from '../Common/ShopHeader'
import RiderAssign from '../../source/rider_assign.jpg'
import './SuccessfulAssign.css'
import { Link } from 'react-router-dom'

export default function SuccessfulAssign() {
  return (
    <>
        <ShopHeader />
        <div className='sa-container'>
          <img className='sa-assign-img' src={RiderAssign} />
          <div className='sa-prompt'>
            Order is successfully assigned to rider.
          </div>
          <button className='sa-btn'>
            <Link className='sa-link' to="/shop/home">Home</Link>
          </button>
        </div>
    </>
  )
}
