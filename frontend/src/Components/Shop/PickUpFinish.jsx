import React from 'react'
import { useNavigate, useParams } from 'react-router'
import ShopHeader from '../Common/ShopHeader';
import './PickUpFinish.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import OrderItemCard from './OrderItemCard';

export default function PickUpFinish(order_number) {
    const {id} = useParams();
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
    useEffect(() => {
        getOrdersById();
        
      }, [id])
      console.log(orderItemsById)
  return (
    
    <div>
        <ShopHeader />
        
        <div className='puf-container'>
            <h3>Riders has pick up order no: {id} and returned to shop. </h3>
            <OrderItemCard orderItems={orderItemsById} id={id}/>
            <button className='puf-btn' onClick={()=> navigate(`/shop/checkitems/${id}`)}>
                Check Items
            </button>
        </div>
        
    </div>
  )
}
