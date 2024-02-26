import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ShopHeader from '../Common/ShopHeader'
import './CustomerOrders.css'
import OrderCard from './OrderCard'
import axios from "axios";

export default function CustomerOrders() {
  const [orderState, setOrderState] = useState('Just Ordered')
  const [orderApi, setOrderApi] = useState()
  const navigate = useNavigate();

  const getOrders = async () => {
    try {
      const  data  = await axios.get("http://localhost:8080/api/shop/orders");
      setOrderApi(data.data);
    } catch (err) {
      alert("cannot get data");
      console.log(err);
    }
  };

  useEffect(() => {
    getOrders();
    
  }, []);
  console.log(orderApi)
  const orders = [
      {
          "order_number": "0050",
          "name": "Brandon",
          "phone_number": "0651086400",
          "location": "Bang Bo, Samut Prakan, 10560, Origin Place Abac Bangna, 7th Floor",
          "order_time": "5:00 PM",
          "order_date": "20/2/2024",
          "rider": "",
          "status" : "Just Ordered"
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
        "order_date": "18/2/2024",
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
      "status" : "Rider Pick Up Ongoing"
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
      navigate(`/shop/home`)
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
        {orderApi?.map(order => {
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
