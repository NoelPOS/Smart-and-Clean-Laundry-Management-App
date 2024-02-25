import React, { useState } from 'react'
import './OrderItemCard.css'
export default function OrderItemCard({orderItems}) {
    console.log(orderItems)
    const [total, setTotal] = useState(120)
  return (
    <div className='oic_container'>
      <p>Order number 0001 items</p>
      {orderItems.map(orderItem => {
        return(
          <p>{orderItem.product_name}   * {orderItem.quantity} </p>
      )})}
      <hr/>
      <p>total = {total}</p>
    </div>
  )
}
