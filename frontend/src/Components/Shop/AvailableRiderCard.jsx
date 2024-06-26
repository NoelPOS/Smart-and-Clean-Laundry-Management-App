import React from 'react'
import './AvailableRiderCard.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function AvailableRiderCard({rider}) {
  const {id} = useParams()
  const navigate = useNavigate()

  const updatePickUpRider = async(id,rid) => {
    try{
      const result = await axios.put(`http://localhost:8080/api/shop/pickUpAssign/${id}`, {pick_up_rider : rid})
      console.log('update successful')
      alert('Assign successful.')
    }catch(error){
      console.log('update fail')
    }
    

  }

  const handleClick = (rid) => {
    console.log(rid)
    console.log(id)
    updatePickUpRider(id,rid)
    navigate('/shop/home')



  }
  return (
    <>
      <div className='rc-card'>
          <p>Rider name: {rider.rider_name}</p>
          <p>Rider email: {rider.rider_email}</p>
          <p>Rider phone number: {rider.rider_number}</p>
          <button onClick={() => handleClick(rider.rider_id)}>Assign</button>
      </div>
    </>
  )
}
