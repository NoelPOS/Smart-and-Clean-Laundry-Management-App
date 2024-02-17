import React from 'react'
import ShopHeader from '../Common/ShopHeader'
import AvailableRiderCard from './AvailableRiderCard'
export default function AvailableRiderList() {
  const riders = [
    {
        "name": "Eroes",
        "phone_number": "0651086432",
        "email": "eroes@gmail.com",
    }
  ]
  return (
    <>
        <ShopHeader />
        <h1>Available Riders</h1>
        {riders.map(rider => {
          return <AvailableRiderCard  rider={rider} />;
      })}
        
    </>
  )
}
