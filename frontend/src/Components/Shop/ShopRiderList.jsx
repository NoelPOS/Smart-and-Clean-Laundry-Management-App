import React from 'react'
import ShopHeader from '../Common/ShopHeader'
import RiderCard from './RiderCard'
export default function ShopRiderList() {
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
        {riders.map(rider => {
          return <RiderCard  rider={rider} />;
      })}
        
    </>
  )
}
