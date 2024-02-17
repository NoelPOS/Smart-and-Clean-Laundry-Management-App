import React from 'react'
import './OrderCard.css'

export default function OrderCard({orders, status}) {
  return (
      <div className='oc-card'>
        <p>Order Number: {orders.order_number}</p>
        <p>Order time: {orders.order_time}</p>
        <p>Customer name: {orders.name}</p>
        <p>Phone Number: {orders.phone_number}</p>
        <p>Location: {orders.location}</p>
        <p className='oc-status'>Status: {orders.status}</p>
        <p>Rider: {orders.rider}</p>
      </div>
    );
}
