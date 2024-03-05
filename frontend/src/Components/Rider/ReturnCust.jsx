import React from 'react'
import { Link } from 'react-router-dom'
import './PickUpCust.css'
import delivering from './delivering.png'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ReturnCust() {
  const navigate = useNavigate()
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

  const handleSubmit = async () => {
    try {
      const data = await axios.put(
        `http://localhost:8080/api/shop/riderorders/orderDetail/returnstatus/${id}`
      )
      alert('Successfully returned!')
      navigate(`/Rider/7`)
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
    <div className='pickup-cust-container'>
      <h2>Returning to Customer</h2>
      <img src={delivering}></img>
      <div className='pickup-cust-detail-container'>
        <h3>Name: {orderApi[0]?.customer_name}</h3>
        <h3>Phone: {orderApi[0]?.customer_number}</h3>
        <h3>Date: {orderApi[0]?.pick_up_date}</h3>
        <h3>Order Number: {orderApi[0]?.order_id}</h3>
        <h3>Pick Up Time: {orderApi[0]?.pick_up_time}</h3>
        <h3>Address: {orderApi[0]?.customer_address}</h3>
      </div>
      <div className='pickup-cust-btn-container'>
        <button className='pickup-cust-btn' onClick={handleSubmit}>
          <Link
            to={`/Rider/RiderHomeScreen/RiderInfoReturn/ReturnDetail/ReturnCust/ReportForm/${id}`}
          >
            Success Return
          </Link>
        </button>
        <button className='pickup-cust-btn'>
          <Link
            className='pickup-cust-link'
            to={`/Rider/RiderHomeScreen/RiderInfoReturn/ReturnDetail/ReturnCust/ReportForm/${id}`}
          >
            Fail Return
          </Link>
        </button>
      </div>
    </div>
  )
}

export default ReturnCust
