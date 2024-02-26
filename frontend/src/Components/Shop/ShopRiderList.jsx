import React from 'react'
import ShopHeader from '../Common/ShopHeader'
import RiderCard from './RiderCard'
import axios from 'axios'
import { useEffect, useState } from 'react'
export default function ShopRiderList() {
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
  console.log(ridersList)
  return (
    <>
        <ShopHeader />
        {ridersList?.map(rider => {
          return <RiderCard  rider={rider} />;
      })}
        
    </>
  )
}
