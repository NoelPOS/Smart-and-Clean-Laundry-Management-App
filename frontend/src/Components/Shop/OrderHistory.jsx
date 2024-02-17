import React from 'react'
import { Link } from 'react-router-dom'
import ShopHeader from '../Common/ShopHeader'
import './OrderHistory.css'
import OrderCard from './OrderCard'

export default function OrderHistory() {
  const orders = [
    {
        "order_number": "0001",
        "name": "Rubi",
        "phone_number": "0651086431",
        "location": "Samut Prakan",
        "order_time": "2024-02-11T04:36:23.000Z",
        "rider": "2024-02-11T04:36:23.000Z",
        "status" : "laundry"
    },
    {
        "order_number": "0002",
        "name": "Randy",
        "phone_number": "0651086432",
        "location": "Samut Prakan",
        "order_time": "2024-02-11T04:36:23.000Z",
        "rider": "2024-02-11T04:36:23.000Z",
        "status" : "rider pick up"
    },
    {
        "order_number": "0003",
        "name": "Apple",
        "phone_number": "0651086418",
        "location": "Samut Prakan",
        "order_time": "2024-02-11T04:36:23.000Z",
        "rider": "",
        "status" : "just ordered"
    },
    {
        "order_number": "0004",
        "name": "Mango",
        "phone_number": "0651086414",
        "location": "Samut Prakan",
        "order_time": "2024-02-11T04:36:23.000Z",
        "rider": "",
        "status" : "just ordered"
    },
    {
        "order_number": "0005",
        "name": "Ferry",
        "phone_number": "0651086437",
        "location": "Samut Prakan",
        "order_time": "2024-02-11T04:36:23.000Z",
        "rider": "2024-02-11T04:36:23.000Z",
        "status" : "rider return"
    },
    {
        "order_number": "0006",
        "name": "Johnson",
        "phone_number": "0651086455",
        "location": "Samut Prakan",
        "order_time": "2024-02-11T04:36:23.000Z",
        "rider": "2024-02-11T04:36:23.000Z",
        "status" : "laundry"
    },
    {
      "order_number": "0007",
      "name": "Jamie",
      "phone_number": "0651086457",
      "location": "Bang Bo",
      "order_time": "2024-02-11T04:36:23.000Z",
      "rider": "Ben",
      "status" : "finish"
  },
]
  return (
    <div>
        <ShopHeader />
        <h3>Order histories</h3>
        {orders.map(order => {
          if (order.status === "finish") {
            return <OrderCard  orders={order} />;
          }
          return null;
      })}
    </div>
  )
}
