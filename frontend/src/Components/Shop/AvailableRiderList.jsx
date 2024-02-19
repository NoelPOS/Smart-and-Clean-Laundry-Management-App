import React from 'react'
import ShopHeader from '../Common/ShopHeader'
import AvailableRiderCard from './AvailableRiderCard'
export default function AvailableRiderList() {
  const riders = [
    {
      "name": "Pen",
      "phone_number": "065186403",
      "email": "pen@gmail.com",
  },
    {
        "name": "Luci",
        "phone_number": "0618401046",
        "email": "luci@gmail.com",
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
