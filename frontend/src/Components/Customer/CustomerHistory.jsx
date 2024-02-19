import React from 'react'
import CustomerHeader from '../Common/CustomerHeader'
import CustomerReceipt from './CustomerReceipt';
import './CustomerHistory.css';
import { Link } from 'react-router-dom';

export default function History() {
  const order =[
    {
      Number: '01283',
      Date: '09/07/2024',
      Time: '5:00 PM'
    },
    {
      Number: '01298',
      Date: '09/03/2024',
      Time: '10:00 AM'
    }
  ]
  return (
    <div>
      <CustomerHeader/>
        <h2 className='cus-his-label'>Order history</h2>
        <div className="cus-his-div">
          {order.map((orders)=>(
            <p className='cus-ohistory'>
                Order number: {orders.Number}<br></br>
                Date : {orders.Date}<br></br>
                Time : {orders.Time}
                <div className='cus-od'><Link to="/customer/orderhistory" >see details</Link></div>
            </p>
          ))}
        </div>
    </div>
  )
}