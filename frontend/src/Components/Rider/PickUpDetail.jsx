import React from 'react'
import { Link } from 'react-router-dom'
import './PickUpDetail.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function PickUpDetail() {
  const { id } = useParams()
  const [orderApi, setOrderApi] = useState([])
  const getOrders = async () => {
    try {
      const data = await axios.get(
        `http://localhost:8080/api/shop/riderorders/orderDetail/${id}`
      )
      setOrderApi(data.data)
    } catch (err) {
      alert('cannot get data')
      console.log(err)
    }
  }

  useEffect(() => {
    getOrders()
  }, [])
  console.log(orderApi)

  return (
    <div className='pickup-detail-container'>
      <h1>Pick Up Detail</h1>

      <div className='detail-container'>
        <h3>Name: {orderApi[0]?.customer_name}</h3>
        <h3>Phone: {orderApi[0]?.customer_number}</h3>
        <h3>Date: {orderApi[0]?.pick_up_date}</h3>
        <h3>Order Number: {orderApi[0]?.order_id}</h3>
        <h3>Pick Up Time: {orderApi[0]?.pick_up_time}</h3>
        <h3>Address: {orderApi[0]?.customer_address}</h3>
      </div>
      <div className='pickup-detail-btn-container'>
        <button className='pickup-detail-btn'>
          <Link
            className='pickup-detail-link'
            to={`/Rider/RiderHomeScreen/RiderInfo/PickUpDetail/PickUpCust/${id}`}
          >
            Pick up from customer
          </Link>
        </button>
        <button className='pickup-detail-btn'>
          <Link
            className='pickup-detail-link'
            to={`/Rider/RiderHomeScreen/${orderApi[0]?.pick_up_rider}`}
          >
            Cancel
          </Link>
        </button>
      </div>
    </div>
  )
}

export default PickUpDetail
