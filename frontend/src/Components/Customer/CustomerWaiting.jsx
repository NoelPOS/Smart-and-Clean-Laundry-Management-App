import React from 'react';
import CustomerHeader from '../Common/CustomerHeader';
import "./CustomerWaiting.css"
import { Link, useParams } from 'react-router-dom';
import delivery from './photos/delivery.jpg';

export default function CustomerWaiting(){
    const {id} = useParams()
    return(
        <div className='cus-waiting-div'>
            <CustomerHeader/>
            <div className='cus-default-container'>
                <img src={delivery} alt='delivery' className='cus-delipickup-img'/>
            <p className='cus-wait-label'>
                Our rider will come pick up on appointed time.
            </p>
            <p className='cus-wait-label'>
                Thank you for your order.
            </p>
            </div>

        <div className='cus-btn-okupdate'>
            <Link to={`/customer/home/${id}`}><button className='cus-btn-ok'>Go back to home</button></Link> 
        </div>

        </div>
    )
}