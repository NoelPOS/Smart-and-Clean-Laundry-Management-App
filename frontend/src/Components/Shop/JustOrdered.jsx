import React, { useState } from 'react'
import './JustOrdered.css'
import { Link } from 'react-router-dom'
import ShopHeader from '../Common/ShopHeader'
import OrderItemCard from './OrderItemCard'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
import axios from 'axios'


export default function JustOrdered() {
    const { id } = useParams();
    const navigate = useNavigate()
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
    
    const orderItems = [
        {
            "product_code" : "0001",
            "product_name" : "Jean",
            "quantity" : 3,
            "price" : 30

        },
        {
            "product_code" : "0005",
            "product_name" : "Shirt",
            "quantity" : 5,
            "price" : 20

        },
    ]
  return (
    <>
        <ShopHeader />
        <button onClick={() => navigate('/shop/customerOrder') }>Back</button>
        <h1>
            Orders in just ordered stage - {id}
        </h1>
        <OrderItemCard orderItems={orderItemsById} id={id}/>
        <button className='jo-btn-assign' onClick={navigate(`/shop/riderList/available/${id}`)}>
                Assign to riders
        </button>
      
    </>
  )
}
