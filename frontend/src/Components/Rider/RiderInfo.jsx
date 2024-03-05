import React from 'react'
import './RiderInfo.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function RiderInfo() {
  const { id } = useParams()
  const [orderApi, setOrderApi] = useState([])

  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/shop/riderorders/${id}`
      )
      setOrderApi(data)
    } catch (err) {
      alert('cannot get data')
      console.error(err)
    }
  }

  useEffect(() => {
    getOrders()
  }, [id]) // Added id as a dependency to re-fetch if the id changes

  return (
    <div className='rider-info-container'>
      <h1>Rider</h1>
      <div className='info-container'>
        {orderApi.length > 0 ? (
          orderApi.map((item, index) => (
            <div className='info' key={index}>
              <h3>Date: {item.pick_up_date}</h3>
              <h3>Order Number: {item.order_id}</h3>
              <h3>Pick Up Time: {item.pick_up_time}</h3>
              <div className='rider-info-detail'>
                <Link
                  to={`/Rider/RiderHomeScreen/RiderInfo/${item.order_id}`}
                  className='rider-info-detail-btn'
                >
                  Go to detail...
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className='no-order-message'>
            <h3>No orders for now</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default RiderInfo
