import React from 'react'
import './AvailableRiderCard.css'
import { Link } from 'react-router-dom'

export default function AvailableRiderCard({rider}) {
  return (
    <>
      <div className='rc-card'>
          <p>Rider name: {rider.name}</p>
          <p>Rider email: {rider.email}</p>
          <p>Rider phone number: {rider.phone_number}</p>
          <button className="arl-btn">
            <Link className="arl-link" to="/shop/pickup/successful">Assign</Link>
          </button>
      </div>
    </>
  )
}
