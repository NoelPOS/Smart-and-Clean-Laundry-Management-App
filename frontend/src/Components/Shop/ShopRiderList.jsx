import React from 'react'
import ShopHeader from '../Common/ShopHeader'
import RiderCard from './RiderCard'
export default function ShopRiderList() {
  const riders = [
    {
        "name": "Elliot",
        "phone_number": "0651086431",
        "email": "elliot@gmail.com",
        
    },
    {
        "name": "Eroes",
        "phone_number": "0651086432",
        "email": "eroes@gmail.com",
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
