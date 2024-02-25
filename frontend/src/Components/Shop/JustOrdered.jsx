import React from 'react'
import './JustOrdered.css'
import { Link } from 'react-router-dom'
import ShopHeader from '../Common/ShopHeader'
import OrderItemCard from './OrderItemCard'
import { useParams, useNavigate } from 'react-router-dom';


export default function JustOrdered() {
    const { id } = useParams();
    const navigate = useNavigate()
    
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
        <OrderItemCard orderItems={orderItems} id={id}/>
        <button className='jo-btn-assign'>
            <Link to="/shop/riderList/available" className="jo-link">
                Assign to riders
            </Link>
        </button>
      
    </>
  )
}
