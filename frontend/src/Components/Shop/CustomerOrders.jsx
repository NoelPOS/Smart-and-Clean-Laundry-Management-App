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
    if (status === 'Laundry Finish') {
      navigate(`/shop/laundryFinish/${orderNo}`)
    }
    if (status === 'Just Ordered') {
      alert('Just Ordered')
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
          console.log(order)
          if (order.status.includes(orderState)) {
            return (
              <div onClick={() => handleNavigate(order.status, order.order_id) }><OrderCard orders={order} /></div>
            );
          }
          return null;
      })}
        {/* <OrderCard orders = {orders} status = {status}/> */}
    </div>
  )
}
