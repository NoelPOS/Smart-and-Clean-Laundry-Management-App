import React, { useState } from "react";
import CustomerHeader from '../Common/CustomerHeader';
import './CustomerRegister.css';
import user from "./photos/user.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function CustomerRegister(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [location,setLocation] = useState('');

      
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        await axios.post('http://localhost:8080/api/shop/getemail', { 
            email: email,
            name:name,
            phone: phone,
            password: password,
            location:location
    
    });
        alert('infos added successfully!');
        navigate('/customer/login')
      } catch (error) {
        console.error('Error adding infos:', error);
        alert('Error adding infos. Please try again.');
      }
    };

    return(
        <div>
            <CustomerHeader/>
            <p className="cus-info-default-label">Personal information</p>
            <img src={user} alt="profile" className="cus-p-img"/>
            <div className="cus-inputs-div">
                <input type="text" placeholder="Name" className="cus-name"  onChange={e => setName(e.target.value)} value={name} required/>                
                <input type="email" placeholder="Email Address" className="cus-email"  onChange={e => setEmail(e.target.value)} value={email} required/>
                <input type="password" placeholder="Password" className="cus-psw"  onChange={e => setPassword(e.target.value)} value={password} required/>
                <input type="password" placeholder="Confirm Password" className="cus-psw" required/>
                <input type="number" placeholder="Phone Number" className="cus-phnum"  onChange={e => setPhone(e.target.value)} value={phone} required/>
                <input type="text" placeholder="City/District/Postcode/Subdistrict/House No,Soi,Moo,Street Name/Unit/Floor" className="cus-add"  onChange={e => setLocation(e.target.value)} value={location} required/>
            </div>
            <div className="cus-btn-r-div">
                <button onClick={handleSubmit} className="cus-btn-r"> Register</button>
            </div>
        </div>
    )
}