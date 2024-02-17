import React from 'react'
import ShopHeader from '../Common/ShopHeader'
import { useNavigate, useParams } from 'react-router'
import PaymentWaitingImg from '../../source/paymentwaitingimg.jpg'
import './PaymentWaiting.css'

export default function PaymentWaiting() {
    const navigate = useNavigate();
    const {id} = useParams();
  return (
    <>
        <ShopHeader />
        <div className='pw-container'>
            <h2>Payment slip sent!</h2>
            <h3 >
                We are waiting for the payment slip for order no: {id}.
            </h3>
            <img className='pw-img' src={PaymentWaitingImg} />
            <button className='pw-btn' onClick={() => navigate('/shop/customerOrder')}>
                Home
            </button>
        </div>
      
    </>
  )
}
