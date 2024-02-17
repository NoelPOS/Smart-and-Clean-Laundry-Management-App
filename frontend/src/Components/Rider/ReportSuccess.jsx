import React from 'react'
import './ReportSuccess.css'
import { Link } from 'react-router-dom'

function ReportSuccess() {
  return (
    <div className='report-success'>
      <h1>Report Successful</h1>

      <button>
        <Link to='/Rider/RiderHomeScreen'>Home Page</Link>
      </button>
    </div>
  )
}

export default ReportSuccess
