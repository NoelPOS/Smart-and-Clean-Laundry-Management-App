import React from 'react'
import { Link } from "react-router-dom"
import ShopHeader from '../Common/ShopHeader'
import './ShopHome.css'

export default function ShopHome() {
  return (
    <>
        <ShopHeader />
        <div className='sho-container'>
            
                <button className='sho-btm'>
                    <Link className='sho-btm-link' to="/shop/customerOrder">Customer Orders</Link>
                </button>
            
                <button className='sho-btm'>
                    <Link className='sho-btm-link' to="/shop/create/timeslots">Create Time slots</Link>
                </button>
            
                <button className='sho-btm'>
                    <Link className='sho-btm-link' to="/shop/create/rider">Rider Registeration</Link>
                </button>
            
                <button className='sho-btm'>
                    <Link className='sho-btm-link' to="/shop/past/order">Order History</Link>
                </button>
                <button  className='sho-btm'>
                    <Link className='sho-btm-link' to="/shop/riderList">Rider List</Link>
                </button>
        </div>
    </>
  )
}
