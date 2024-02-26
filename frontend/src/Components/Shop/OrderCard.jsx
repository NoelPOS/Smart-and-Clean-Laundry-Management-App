import React from 'react'
import './OrderCard.css'

export default function OrderCard({orders, status}) {
  return (
      <div className='oc-card'>
        <p>Order Number: {orders.order_id}</p>
        <p>Pick Up time: {orders.pick_up_time}</p>
        <p>Pick Up date: {orders.pick_up_date}</p>
        <p>Customer name: {orders.customer_name}</p>
        <p>Phone Number: {orders.customer_number}</p>
        <p>Location: {orders.customer_address}</p>
        <p className='oc-status'>Status: {orders.status}</p>
        <p>Pick Up Rider: {orders.pick_up_rider_name}</p>
        <p>Return Rider: {orders.return_rider_name}</p>

      </div>
    );
}
