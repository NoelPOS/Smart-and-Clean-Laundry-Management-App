import React from 'react'
import ShopHeader from '../Common/ShopHeader'
import { useNavigate, useParams } from 'react-router'
import './CheckItemsBeforePayment.css'

export default function CheckItemsBeforePayment() {
    const {id} = useParams()
    const navigate = useNavigate();
  return (
    <>
        <ShopHeader />
    
        <div className='cibp-container'>
            <h3>
                Item Lists for Order No: {id}
            </h3>
            <h3>Check before proceed to the payment </h3>
            <div className='cibp-items'>
                <h4>Customer items</h4>
                <p>Jeans          x 3</p>
                <p>Skirt          x 4</p>
                <p>T-shirt        x 4</p>
                <p>Shorts         x 2</p>
                <hr/>
                <p>Total          =150 Baht</p>
            </div>
            <button className='cibp-btn' onClick={()=> navigate('/shopCheckItems')}>
                Edit
            </button>
            <button className='cibp-btn' onClick={()=> navigate(`/shop/paymentWaiting/${id}`)}>
                Send payment slip to customer
            </button>
        </div>      
    </>
  )
}
