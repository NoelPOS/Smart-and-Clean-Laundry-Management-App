import React, { useState } from 'react'
import './ReturnReport.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ReturnReport = () => {
  const navigate = useNavigate()
  let { id } = useParams()
  const [reason, setReason] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Create current date and time strings
    const currentDate = new Date()
      .toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .split('/')
      .join('-') // Adjust format as needed

    const currentTime = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }) // Adjust format as needed

    try {
      await axios.put(
        `http://localhost:8080/api/shop/riderorders/orderDetail/orderstatus/returnorderreport/${id}`,
        {
          reason: reason,
          date: currentDate, // Separate date
          time: currentTime, // Separate time
        }
      )
      // Navigate to success page after submission
      navigate(
        `/Rider/RiderHomeScreen/RiderInfoReturn/ReturnDetail/ReturnCust/ReportForm/ReportSuccess/${id}`
      )
    } catch (err) {
      alert('cannot get data')
      console.error(err)
    }
  }

  return (
    <div className='report-form-container'>
      <h1>Make a report</h1>
      <form>
        <textarea
          className='reason-input'
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder='Please fill out the reason'
          required
        />
        <button type='submit' className='submit-button' onClick={handleSubmit}>
          <Link
            className='submit-button-link'
            to={`/Rider/RiderHomeScreen/RiderInfoReturn/ReturnDetail/ReturnCust/ReportForm/ReportSuccess/${id}`}
          >
            Submit
          </Link>
        </button>
      </form>
    </div>
  )
}

export default ReturnReport
