import React from 'react'
import ShopHeader from '../Common/ShopHeader'
import { useNavigate, useParams } from 'react-router'
import './CheckItemsBeforePayment.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import OrderItemCard from './OrderItemCard'

export default function CheckItemsBeforePayment() {
    const {id} = useParams()
    const navigate = useNavigate();
    const [orderItemsById, setOrderItems] = useState()
    const getOrdersById = async () => {
        try {
          const  data  = await axios.get(`http://localhost:8080/api/shop/getOrderItems/${id}`);
          setOrderItems(data.data);
        } catch (err) {
          alert("cannot get data");
          console.log(err);
        }
    }
    const updatePaymentWaiting = async () => {
        try {
          const  results  = await axios.put(`http://localhost:8080/api/shop/paymentWaiting/${id}`);
          alert('Payment slip successfully sent to customer.')
        } catch (err) {
          alert("Payment slip sent failed.");
          console.log(err);
        }
    }

    const sentPaymentSlip = async() => {
        try{
            await updatePaymentWaiting()
            navigate(`/shop/paymentWaiting/${id}`)
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getOrdersById();
        
    }, [id])
      console.log(orderItemsById)
  return (
    <>
        <ShopHeader />
    
        <div className='cibp-container'>
            <h3>
                Item Lists for Order No: {id}
            </h3>
            <h3>Check before proceed to the payment </h3>
            <OrderItemCard orderItems={orderItemsById} id={id}/>
            
            <button className='cibp-btn' onClick={()=> navigate(`/shop/laundryItems/${id}`)}>
                Edit
            </button>
            <button className='cibp-btn' onClick={sentPaymentSlip}>
                Send payment slip to customer
            </button>
        </div>      
    </>
  )
}
