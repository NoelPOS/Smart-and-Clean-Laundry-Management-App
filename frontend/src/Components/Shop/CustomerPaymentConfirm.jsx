import React from 'react'
import { useNavigate, useParams } from 'react-router'
import ShopHeader from '../Common/ShopHeader';
import PaymentSlip from '../../source/Payment.jpeg'
import './CustomerPaymentConfirm.css'
export default function CustomerPaymentConfirm() {
    const {id} = useParams();
    const navigate = useNavigate();
    return (
        <>  
            <ShopHeader />
            <h3>Customer sent payment slip for order no {id}</h3>
            <div className='cpc-container'>
                <img className='cpc-img' src={PaymentSlip}/>
                <button className='cpc-btn' onClick={() => navigate('/shop/customerOrder')}>Start the laundry</button>
            </div>
        
        </>
    )
}
