import React from 'react'
import './AvailableRiderCardReturn.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function AvailableRiderCardRetrun({rider}) {
  const {id} = useParams()
  const navigate = useNavigate()

  const updateReturnRider = async(id,rid) => {
    try{
      const result = await axios.put(`http://localhost:8080/api/shop/returnRiderAssign/${id}`, {return_rider : rid})
      console.log('update successful')
      alert('Assign successful.')
    }catch(error){
      console.log('update fail')
    }
  }

  const handleClick = (rid) => {
    console.log(rid)
    console.log(id)
    updateReturnRider(id,rid)
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
