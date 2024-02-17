import React from 'react';
import CustomerHeader from '../Common/CustomerHeader';
import ReceiptCard from './ReceiptCard';
import "./Receipt.css"
import { Link } from 'react-router-dom';

function Receipt() {
  return (
    <div className='receipt-container'>
      <CustomerHeader/>
      <ReceiptCard/>
      <div className='cus-btn-cc-container'>
        <Link to="/customer/orderConfirmation"><button className='btn-confirm'>Confirm</button></Link>
        <Link to="/customer/chooseItems"><button className='btn-cancel'>Cancel</button></Link>
      </div>
    </div>
  );
}

export default Receipt;
