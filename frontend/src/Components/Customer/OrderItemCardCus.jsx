import React, { useState,useEffect } from 'react'
import './OrderItemCardCus.css'
export default function OrderItemCard({orderItems}) {
    console.log(orderItems)
    const [total, setTotal] = useState(0)
    useEffect(() => {
      let newTotal = 0;
      orderItems?.map(orderItem => {
        newTotal += parseInt(orderItem.total_price);
      });
      setTotal(newTotal);
    }, [orderItems]);
   console.log(total)
    
  return (
    <div className='oic_container'>
      <p>Order items</p>
      {orderItems?.map(orderItem => {
        return(
          <p>{orderItem.item_title}: {orderItem.selling_price}   * {orderItem.quantity}  = {orderItem.total_price} </p>
      )})}
      <hr/>
      <p>total = {total}</p>
      
      {/* {orderItems?.map(orderItem => {
        
        return(
          <p>{orderItem.item_title}: {orderItem.selling_price}   * {orderItem.quantity}  = {orderItem.total_price}</p>
        )
      })} */}
    </div>
  )
}
