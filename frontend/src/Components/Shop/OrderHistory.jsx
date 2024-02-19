import React from 'react'
import { Link } from 'react-router-dom'
import ShopHeader from '../Common/ShopHeader'
import './OrderHistory.css'
import OrderCard from './OrderCard'

export default function OrderHistory() {
  const orders = [
    {
      "order_number": "0050",
      "name": "Bryan",
      "phone_number": "0651086400",
      "location": "Bang Bo, Samut Prakan, 10560, Origin Place Abac Bangna, 7th Floor",
      "order_time": "5:00 PM",
      "order_date": "20/2/2024",
      "rider": "",
      "status" : "Rider Pick Up Ongoing"
  },
  {
      "order_number": "0051",
      "name": "HAS",
      "phone_number": "09420066144",
      "location": "Bang Bo, Samut Prakan, 10560, Bann Pirawit, 2nd Floor",
      "order_time": "8:00 PM",
      "order_date": "21/2/2024",
      "rider": "",
      "status" : "Just Ordered"
  },
  {
      "order_number": "0040",
      "name": "Johnson",
      "phone_number": "0960090059",
      "location": "Bang Bo, Samut Prakan, 10560, The Rich Abac, 4th Floor",
      "order_time": "7:00 PM",
      "order_date": "18/2/2024",
      "rider": "Pen",
      "status" : "Rider return"
  },
  {
    "order_number": "0039",
    "name": "Rose",
    "phone_number": "0980090059",
    "location": "Bang Bo, Samut Prakan, 10560, The Rich Abac, 5th Floor",
    "order_time": "7:00 PM",
    "order_date": "16/2/2024",
    "rider": "Pen",
    "status" : "finish"
},
  {
      "order_number": "0043",
      "name": "Jefferson",
      "phone_number": "06199488149",
      "location": "Bang Bo, Samut Prakan, 10560, The Porch Condominium Abac, 7th Floor",
      "order_time": "3PM",
      "order_date": "19/2/2024",
      "rider": "Luci",
      "status" : "Rider Pick Up Finish"
  },
  {
      "order_number": "0042",
      "name": "Ferry",
      "phone_number": "0651086437",
      "location": "Samut Prakan",
      "order_time": "9Am",
      "order_date": "18/2/2024",
      "rider": "Luci",
      "status" : "Rider return"
  },
  {
      "order_number": "0046",
      "name": "Georgie",
      "phone_number": "0651086505",
      "location": "Samut Prakan",
      "order_time": "2024-02-11T04:36:23.000Z",
      "order_date": "19/2/2024",
      "rider": "Luci",
      "status" : "Laundry Finished"
  },
  {
    "order_number": "0047",
    "name": "Jamie",
    "phone_number": "0651086457",
    "location": "Bang Bo, Samut Prakan, 10560, DCondo, 3rd Floor",
    "order_time": "12PM",
    "order_date": "20/2/2024",
    "rider": "Luci",
    "status" : "Finish"
},
{
  "order_number": "0048",
  "name": "Panda",
  "phone_number": "0651086457",
  "location": "Bang Bo, Samut Prakan, 10560, The Porch Condominium Abac, 7th Floor",
  "order_time": "9AM",
  "order_date": "18/2/2024",
  "rider": "Luci",
  "status" : "Rider Pick Up Finish"
},
{
"order_number": "0047",
"name": "Pinky",
"phone_number": "06510864532",
"location": "Bang Bo, Samut Prakan, 10560, DCondo, 12th Floor",
"order_time": "9AM",
"rider": "Luci",
"order_date": "18/2/2024",
"status" : "Payment Waiting"
},
{
"order_number": "0043",
"name": "Patch",
"phone_number": "09610864532",
"location": "Bang Bo, Samut Prakan, 10560, The Porch Condominium Abac, 3rd Floor",
"order_time": "9AM",
"order_date": "19/2/2024",
"rider": "Luci",
"status" : "Payment Confirm"
},
{
"order_number": "0045",
"name": "Ron",
"phone_number": "09610865000",
"location": "Bang Bo, Samut Prakan, 10560, The Porch Condominium Abac, 3rd Floor",
"order_time": "11AM",
"order_date": "19/2/2024",
"rider": "Pen",
"status" : "Laundry Ongoing"
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
