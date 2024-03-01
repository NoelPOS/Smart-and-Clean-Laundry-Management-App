import React from 'react'
import laundryOngoingImg from '../../source/laundry_ongoing.jpg'
import './LaundryOngoing.css'
import ShopHeader from '../Common/ShopHeader'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function LaundryOngoing() {
  const navigate = useNavigate();
  const {id} = useParams();

  const finishLaundry = async() => {
    try{
        await updateFinishLaundry()
        navigate('/shop/customerOrder')
    }
    catch (err) {
        console.log(err)
    }
}

  const updateFinishLaundry = async() => {
    try {
        const  results  = await axios.put(`http://localhost:8080/api/shop/finishlaundry/${id}`);
        alert('Laundry has finished.')
        
      } catch (err) {
        alert("Laundry failed to finish.");
        console.log(err);
      }
}
  return (
    <div>
        <ShopHeader />
        <div className='lo-container'>
          <h1>
              Laundry is ongoing.......
          </h1>
          <img className='lo-ongoing-img' src={laundryOngoingImg} />
          <br/>
          <div>
              <button className='lo-btn' onClick={finishLaundry}>Finish the laundry</button>
              <button className='lo-btn' onClick={() => navigate('/shop/customerorder')}>
                Back
              </button>
          </div>
        </div>
        
    </div>
  )
}
