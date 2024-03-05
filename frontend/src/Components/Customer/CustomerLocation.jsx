import React from "react";
import './CustomerLocation.css';
import CustomerHeader from "../Common/CustomerHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CustomerLocation(){
    const navigate = useNavigate()
    const [location,setLocation] = useState('');

      
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        await axios.post('http://localhost:8080/api/shop/getlocation', { location });
        alert('infos added successfully!');
        navigate('/customer/home')
      } catch (error) {
        console.error('Error adding infos:', error);
        alert('Error adding infos. Please try again.');
      }
    };
    return(
        <div>
            <CustomerHeader/>
            <p className="cus-add-default-label">Address details</p>
            <div className="cus-add-input-div">
                <input type="text" placeholder="City/District/Postcode/Subdistrict/House No,Soi,Moo,Street Name/Unit/Floor" className="cus-add"  onChange={e => setLocation(e.target.value)} value={location} required/>
            </div>
            <div className="cus-btn-sub-div">
              <button type="submit" onClick={handleSubmit} className="cus-sub-btn">Submit</button>
            </div>
        </div>
    )
}