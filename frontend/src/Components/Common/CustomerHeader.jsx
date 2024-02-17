import React from 'react'
import { Link } from 'react-router-dom'
import './CustomerHeader.css'

export default function CustomerHeader() {
  return (
    <div className='cus-div'>
        <Link className='cus-link-logo' to="/customer/home">Smart and Clean</Link>
    </div>
  )
}