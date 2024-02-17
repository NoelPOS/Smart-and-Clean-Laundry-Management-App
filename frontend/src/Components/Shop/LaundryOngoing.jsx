import React from 'react'
import laundryOngoingImg from '../../source/laundry_ongoing.jpg'
import './LaundryOngoing.css'
import ShopHeader from '../Common/ShopHeader'
import { Link, useNavigate } from 'react-router-dom'

export default function LaundryOngoing() {
  const navigate = useNavigate();
  return (
    <div>
        <ShopHeader />
        <div className='lo-container'>
          <h1>
              Laundry is ongoing.......
          </h1>
          <img className='lo-ongoing-img' src={laundryOngoingImg} />
          <br/>
          <div>
              <button className='lo-btn'>Finish the laundry</button>
              <button className='lo-btn' onClick={() => navigate('/shop/customerorder')}>
                Back
              </button>
          </div>
        </div>
        
    </div>
  )
}
