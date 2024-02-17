import React, { useState } from 'react'
import './ReportForm.css'
import { Link } from 'react-router-dom'

const ReportForm = () => {
  const [reason, setReason] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(reason)
  }

  return (
    <div className='report-form-container'>
      <h1>Make a report</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className='reason-input'
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder='Please fill out the reason'
          required
        />
        <button type='submit' className='submit-button'>
          <Link
            className='submit-button-link'
            to='/Rider/RiderHomeScreen/RiderInfo/PickUpDetail/PickUpCust/ReportForm/ReportSuccess'
          >
            Submit
          </Link>
        </button>
      </form>
    </div>
  )
}

export default ReportForm
