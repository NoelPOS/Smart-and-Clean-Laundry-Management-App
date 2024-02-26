import React, { useEffect, useState } from 'react'
import ShopHeader from '../Common/ShopHeader'
import AvailableRiderCard from './AvailableRiderCard'
import axios from 'axios'
export default function AvailableRiderList() {
  const [ridersList, setRiderList] = useState()
  
  const getRiders = async () => {
    try {
      const  data  = await axios.get("http://localhost:8080/api/shop/riders");
      setRiderList(data.data);
    } catch (err) {
      alert("cannot get data");
      console.log(err);
    }
  }
  useEffect(() => {
    getRiders();
  }, [])
  
  return (
    <>
        <ShopHeader />
        <h1>Available Riders</h1>
        {ridersList?.map(rider => {
          return <AvailableRiderCard  rider={rider} />;
      })}
        
    </>
  )
}
