import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ShopHeader from '../Common/ShopHeader'
import AvailableRiderList from './AvailableRiderList'
import LaundryFinishImg from '../../source/laundry_finish.jpg'
import './LaundryFinish.css'

export default function LaundryFinish() {
  const navigate = useNavigate()
  const {id} = useParams()
  const AssignRiders = () => {
    alert('hi')
    navigate(`/shop/riderList/available/return/${id}`)
      
  }
  return (
    <div>
      <ShopHeader/>
      <div className='lf_container'>
        <h1>
            Laundry has finished.
        </h1>
        <img className='lf_img' src={LaundryFinishImg} />
        <button className='lf_btn' onClick={AssignRiders}>
          Assign to riders.
        </button>
      </div>
    </div>
  )
}
