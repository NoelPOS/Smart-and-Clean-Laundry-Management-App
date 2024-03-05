import React from 'react'
import './ReturnReportSuccess.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ReturnReportSuccess() {
  let { id } = useParams()
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

  return (
    <div className='report-success'>
      <h1>Report Successful</h1>

      <button>
        <Link to={`/Rider/${orderApi[0]?.pick_up_rider}`}>Home Page</Link>
      </button>
    </div>
  )
}

export default ReturnReportSuccess
