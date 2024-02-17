import React from 'react'
import { useNavigate, useParams } from 'react-router'
import ShopHeader from '../Common/ShopHeader';
import './PickUpFinish.css'

export default function PickUpFinish(order_number) {
    const {id} = useParams();
    const navigate = useNavigate();
  return (
    
    <div>
        <ShopHeader />
        
        <div className='puf-container'>
            <h3>Riders has pick up order no: {id} and returned to shop. </h3>
            <div className='puf-items'>
                <h4>Customer items</h4>
                <p>Jeans          x 3</p>
                <p>Skirt          x 4</p>
                <p>T-shirt        x 4</p>
                <p>Shorts         x 2</p>
                <hr/>
                <p>Total          =150 Baht</p>
            </div>
            <button className='puf-btn' onClick={()=> navigate(`/shop/checkitems/${id}`)}>
                Check Items
            </button>
        </div>
        
    </div>
  )
}
