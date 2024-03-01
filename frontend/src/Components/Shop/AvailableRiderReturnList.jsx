import React, { useEffect, useState } from 'react'
import ShopHeader from '../Common/ShopHeader'
import AvailableRiderCardRetrun from './AvailableRiderCardReturn'
import axios from 'axios'
import { useParams } from 'react-router'
export default function AvailableRiderReturnList() {
  const [ridersList, setRiderList] = useState()
  const {id} = useParams()
  console.log(id)
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
          return (
              <AvailableRiderCardRetrun  rider={rider} />
          )
      })}
        
    </>
  )
}
