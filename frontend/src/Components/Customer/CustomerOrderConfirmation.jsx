import React from 'react'
import './CustomerOrderConfirmation.css'
import CustomerHeader from '../Common/CustomerHeader'
import ReceiptCard from './ReceiptCard';
import { Link } from 'react-router-dom';

export default function CustomerOrderConfirmation() {
  return (
      <div className='cus-orderconfirm-div'>
        <CustomerHeader/>
        <h3>Order confirmation</h3>
        <div className='cus-order-div'>
        <p>Name: Brandon</p>
        <p>Location: Origin Place ABAC Bangna Soi Nawamin 1, Samut Prakern</p>
        <p>Phone number: 0651086400</p>
        <p>Pick-up time: 5PM</p>
        <div className='cus-rcard'><ReceiptCard /></div>
        </div>
        <div className='cus-btn-cnd'>
            <Link to="/customer/pickingup"><button className='cus-btn-c'>Confirm</button></Link> 
            <Link to="/customer/home"><button className='cus-btn-d'>Delete</button></Link>
        </div>
      </div>
    );
}