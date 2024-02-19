import React from "react";
import busket from './photos/busket.png';
import clothes from './photos/clothes.png';
import detergent from './photos/detergent.png';
import iron from './photos/iron.png';
import towel from './photos/towel.png';
import wm from './photos/wm.png';
import './CustomerLogin.css';
import { Link } from "react-router-dom";

export default function CustomerLogin(){
    return(
        <div>
            <div className="cus-icons-div">
                <img className="cus-icon" src={detergent} alt="detergent"/>
                <img className="cus-icon" src={wm} alt="washing machine"/>
                <img className="cus-icon" src={clothes} alt="clothes"/>
                <img className="cus-icon" src={iron} alt="iron"/>
                <img className="cus-icon" src={towel} alt="towel"/>
                <img className="cus-icon" src={busket} alt="busket"/>
            </div>
            <p className="cus-header-label">Smart and Clean</p>

                <input type="email" className="cus-email" placeholder="Email address"/>
                <input type="password" className="cus-psw" placeholder="Password"/>
            <div className="cus-lnr-div">
                <Link to="/customer/home" ><button className="cus-btn-login">Log in</button></Link>
                <p>or</p>
                <Link to="/customer/register" ><button className="cus-btn-register">Register</button></Link> 
            </div> 
        </div>
    )
}