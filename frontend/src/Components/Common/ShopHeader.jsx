import React from 'react'
import { Link } from 'react-router-dom'
import './ShopHeader.css'

export default function ShopHeader() {
  return (
    <div className='sh-div'>
        <Link className='sh-link-logo' to="/shop/home">Smart and Clean</Link>
    </div>
  )
}
