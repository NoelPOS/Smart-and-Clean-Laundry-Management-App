import React from 'react'
import { Link } from 'react-router-dom'
import ShopHeader from '../Common/ShopHeader'
import AvailableRiderList from './AvailableRiderList'
import LaundryFinishImg from '../../source/laundry_finish.jpg'
import './LaundryFinish.css'

export default function LaundryFinish() {
  return (
    <div>
      <ShopHeader/>
      <div className='lf_container'>
        <h1>
            Laundry has finished.
        </h1>
        <img className='lf_img' src={LaundryFinishImg} />
        <button className='lf_btn'>
          <Link className='lf_link' to="/shop/riderList/available">Assign to riders.</Link>
        </button>
      </div>
    </div>
  )
}
