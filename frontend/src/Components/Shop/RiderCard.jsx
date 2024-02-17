import React from 'react'
import './RiderCard.css'
import { Link } from 'react-router-dom'

export default function RiderCard({rider}) {
  return (
    <>
      <div className='rc-card'>
          <p>Rider name: {rider.name}</p>
          <p>Rider email: {rider.email}</p>
          <p>Rider phone number: {rider.phone_number}</p>
          <Link to="/shop/riderDetails">Go to Details</Link>
      </div>
    </>
  )
}
