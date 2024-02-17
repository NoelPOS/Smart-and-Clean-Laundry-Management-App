import React from 'react'
import { Link } from 'react-router-dom'
import ShopHeader from '../Common/ShopHeader'
import './RiderRegisteration.css'
export default function RiderRegisteration() {
  
  return (
    <div>
      <ShopHeader />
      
      <form className='rr-form'>
        <p>Rider's information</p>
        <input type='file' placeholder='name' className='rr-input-img' /><br/>
        <input type='text' placeholder='Name' className='rr-input-text' /> <br/>
        <input type='text' placeholder='Email' className='rr-input-text' /> <br/>
        <input type='password' placeholder='Password' className='rr-input-text'/><br/>
        <input type='password' placeholder='Confirm password' className='rr-input-text'/><br/>
        <input type='text' placeholder='Phone number' className='rr-input-text'/><br/>
        
      </form>
      <button type='submit' className='rr-input-submit'>
        <Link className="rr-input-submit-link" to="/shop/riderList">Register</Link>
      </button>
      
    </div>
  )
}
