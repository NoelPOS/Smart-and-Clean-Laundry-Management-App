import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ShopHeader from '../Common/ShopHeader';
import './RiderEditDelete.css';
import profile from '../../source/avatar.jpg';

export default function RiderEditDelete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rider, setRider] = useState(null);

  const getRiderDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/shop/riders/${id}`);
      setRider(response.data);
    } catch (error) {
      console.error('Error fetching rider details:', error);
      alert("Cannot get data");
    }
  };

  const deleteRider = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/shop/rider/${id}`);
      alert("Rider deleted successfully");
      navigate('/shop/riderList');
    } catch (error) {
      console.error("Error deleting rider:", error);
      alert(error);
    }
  };

  useEffect(() => {
    getRiderDetails();
  }, [id]);

  console.log('Rider:', rider);

  return (
    <>
      <ShopHeader />
      {rider && (
        <form className='red-form'>
          <img src={profile} className='red-input-img' alt='Rider Profile' />
          
          <span>Rider name : </span>
          <input 
            value={rider[0]?.rider_name || ''}
            
          /><br/>
          <span>Rider number : </span>
          <input 
            value={rider[0]?.rider_number || ''}
            
          /><br/>
          <span>Rider email : </span>
          <input 
            value={rider[0]?.rider_email || ''}
            
          /><br/>      
          <button type='button' className='red-input-submit' onClick={deleteRider}>Delete</button>
        </form>
      )}
    </>
  );
}
