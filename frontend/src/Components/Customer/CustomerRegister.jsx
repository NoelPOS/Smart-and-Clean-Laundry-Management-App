import React from "react";
import CustomerHeader from '../Common/CustomerHeader';
import './CustomerRegister.css';
import user from "./photos/user.png";
import { Link } from "react-router-dom";
export default function CustomerRegister(){
    return(
        <div>
            <CustomerHeader/>
            <p className="cus-info-default-label">Personal information</p>
            <img src={user} alt="profile" className="cus-p-img"/>
            <div className="cus-inputs-div">
                <input type="text" placeholder="Name" className="cus-name" required/>                
                <input type="email" placeholder="Email Address" className="cus-email" required/>
                <input type="password" placeholder="Password" className="cus-psw" required/>
                <input type="password" placeholder="Confirm Password" className="cus-psw" required/>
                <input type="number" placeholder="Phone Number" className="cus-phnum" required/>
            </div>
            <div className="cus-btn-r-div">
                <Link to="/customer/location"><button className="cus-btn-r"> Register</button></Link>
            </div>
        </div>
    )
}