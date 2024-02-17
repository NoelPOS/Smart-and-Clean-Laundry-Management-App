import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ShopHeader from '../Common/ShopHeader'
import './CustomerOrders.css'
import OrderCard from './OrderCard'

export default function CustomerOrders() {
  const [orderState, setOrderState] = useState('Just Ordered')
  const navigate = useNavigate();
  const orders = [
      {
          "order_number": "0001",
          "name": "Rubi",
          "phone_number": "0651086431",
          "location": "Samut Prakan",
          "order_time": "2024-02-11T04:36:23.000Z",
          "rider": "2024-02-11T04:36:23.000Z",
          "status" : "Laundry Ongoing"
      },
      {
          "order_number": "0002",
          "name": "Randy",
          "phone_number": "0651086432",
          "location": "Samut Prakan",
          "order_time": "2024-02-11T04:36:23.000Z",
          "rider": "Pen",
          "status" : "Rider Pick Up Ongoing"
      },
      {
          "order_number": "0003",
          "name": "Apple",
          "phone_number": "0651086418",
          "location": "Samut Prakan",
          "order_time": "2024-02-11T04:36:23.000Z",
          "rider": "",
          "status" : "Just Ordered"
      },
      {
          "order_number": "0004",
          "name": "Mango",
          "phone_number": "0651086414",
          "location": "Samut Prakan",
          "order_time": "2024-02-11T04:36:23.000Z",
          "rider": "",
          "status" : "Just Ordered"
      },
      {
          "order_number": "0005",
          "name": "Ferry",
          "phone_number": "0651086437",
          "location": "Samut Prakan",
          "order_time": "2024-02-11T04:36:23.000Z",
          "rider": "Pen",
          "status" : "Rider return"
      },
      {
          "order_number": "0006",
          "name": "Johnson",
          "phone_number": "0651086455",
          "location": "Samut Prakan",
          "order_time": "2024-02-11T04:36:23.000Z",
          "rider": "Tony",
          "status" : "Laundry Finished"
      },
      {
        "order_number": "0007",
        "name": "Jamie",
        "phone_number": "0651086457",
        "location": "Bang Bo",
        "order_time": "2024-02-11T04:36:23.000Z",
        "rider": "Ben",
        "status" : "Finish"
    },
    {
      "order_number": "0008",
      "name": "Brandon",
      "phone_number": "0651086457",
      "location": "Bang Bo",
      "order_time": "9AM",
      "rider": "Ben",
      "status" : "Rider Pick Up Finish"
  },
  {
    "order_number": "0009",
    "name": "Pinky",
    "phone_number": "06510864532",
    "location": "Bang Bo",
    "order_time": "9AM",
    "rider": "Ben",
    "status" : "Payment Waiting"
  },
  {
    "order_number": "0010",
    "name": "Patch",
    "phone_number": "09610864532",
    "location": "Bang Bo",
    "order_time": "9AM",
    "rider": "Ben",
    "status" : "Payment Confirm"
  },

  ]

  const buttonStates = [
    'Just Ordered',
    'Rider Pick Up',
    'Payment',
    'Laundry',
    'Rider return'
    
  ]

  const handleNavigate = (status, orderNo) => {
    if (status === 'Laundry Ongoing') {
      navigate(`/shop/laundryOngoing/${orderNo}`)
    }
    if (status === 'Laundry Finished') {
      navigate(`/shop/laundryFinish/${orderNo}`)
    }
    if (status === 'Just Ordered') {
      navigate(`/shop/customerOrder/${orderNo}`)
    }
    if (status === 'Rider return') {
      navigate(`/shop/`)
    }
    if (status === 'Rider Pick Up Ongoing') {
      navigate(`/shop/pickUpOngoing/${orderNo}`)
    }
    if (status === 'Rider Pick Up Finish') {
      navigate(`/shop/pickUpFinish/${orderNo}`)
    }
    if (status === 'Payment Waiting') {
      navigate(`/shop/paymentWaiting/${orderNo}`)
    }
    if (status === 'Payment Confirm') {
      navigate(`/shop/pickUp/confirmPayment/${orderNo}`)
    }
  }
  return (
    <div>
        <ShopHeader />
        
        <div>
          {buttonStates.map(states => {
            return(
              <button className={`co-filter-btn ${(orderState === states)? 'co-active' : ''}`} onClick={() => setOrderState(states)}>
                {states}
              </button>
            )
          })}
        </div>
        <h1>Orders in "{orderState}" stage</h1>
        {orders.map(order => {
          console.log(order.status)
          console.log(orderState)
          console.log('*****')
          if (order.status.includes(orderState)) {
            return (
              <div onClick={() => handleNavigate(order.status, order.order_number) }><OrderCard orders={order} /></div>
            );
          }
          return null;
      })}
        {/* <OrderCard orders = {orders} status = {status}/> */}
    </div>
  )
}
