import React from 'react'
import ShopHeader from '../Common/ShopHeader'
import PickUpImg from '../../source/pickupimg.jpg'
import './PickUpOngoing.css'
import { useNavigate } from 'react-router'
export default function PickUpOngoing() {
  const navigate = useNavigate();
  return (
    <div>
      <ShopHeader/>
      <div className='pco-container'>
        <h1>
          Riders are picking up this order from customer.
        </h1>
        <img className='pco-img' src={PickUpImg} />
        <button className='pco-btn' onClick={() => navigate('/shop/customerOrder')}>
          Back
        </button>
      </div>
      
      
    </div>
  )
}
