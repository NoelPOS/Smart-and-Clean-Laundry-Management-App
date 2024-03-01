import React from 'react'
import { useNavigate, useParams } from 'react-router'
import ShopHeader from '../Common/ShopHeader';
import PaymentSlip from '../../source/Payment.jpeg'
import './CustomerPaymentConfirm.css'
import axios from 'axios';
export default function CustomerPaymentConfirm() {
    const {id} = useParams();
    const navigate = useNavigate();

    const startlaundry = async() => {
        try{
            await updateLaundryStart()           
        }
        catch (err) {
            console.log(err)
        }
    }
    const updateLaundryStart = async() => {
        try {
            const  results  = await axios.put(`http://localhost:8080/api/shop/startlaundry/${id}`);
            alert('Laundry has started.')
            navigate('/shop/customerOrder')
          } catch (err) {
            alert("Laundry failed to start.");
            console.log(err);
          }
    }
    return (
        <>  
            <ShopHeader />
            <h3>Customer sent payment slip for order no {id}</h3>
            <div className='cpc-container'>
                <img className='cpc-img' src={PaymentSlip}/>
                <button className='cpc-btn' onClick={startlaundry}>Start the laundry</button>
            </div>
        
        </>
    )
}
