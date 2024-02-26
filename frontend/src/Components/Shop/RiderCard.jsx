import React from 'react'
import './RiderCard.css'
import { Link, useNavigate } from 'react-router-dom'

export default function RiderCard({rider}) {
  const navigate = useNavigate()
  const handleNavigate = (riderId) => {
    console.log(riderId)
    navigate(`/shop/riderDetails/${riderId}`)
  }
  return (
    <>
      <div className='rc-card'>
          <p>Rider name: {rider.rider_name}</p>
          <p>Rider email: {rider.rider_email}</p>
          <p>Rider phone number: {rider.rider_number}</p>
          <button onClick={()=> handleNavigate(rider.rider_id)}>Go to Details</button>
      </div>
    </>
  )
}
