import React from "react";
import busket from './photos/busket.png';
import clothes from './photos/clothes.png';
import detergent from './photos/detergent.png';
import iron from './photos/iron.png';
import towel from './photos/towel.png';
import wm from './photos/wm.png';
import './CustomerLogin.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function CustomerLogin(){
        const [email, setEmail] = useState('');
        const [password,setPassword] = useState('');
        const navigate = useNavigate();
      
        const handleSubmit = async (e) => {
            e.preventDefault()
            try {
              const { data } = await axios.post(
                'http://localhost:8080/api/shop/cuslogin',
                {
                  email,
                  password
                }
              )
              

              console.log(data)
              navigate(`/customer/home/${data.customer_id}`)
            } catch (error) {
              alert('Wrong Credentials!')
              console.error(error.response.data) // Handle error (e.g., show message to the user)
            }
        }
          
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
            <form >
            <p className="cus-header-label">Smart and Clean</p>

                <input type="email" className="cus-email" placeholder="Email address" onChange={e => setEmail(e.target.value)} value={email}/>
                <input type="password" className="cus-psw" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} />
            <div className="cus-lnr-div">
               <button onClick={handleSubmit} type="submit" className="cus-btn-login">Log in</button>
                <p>or</p>
                <Link to="/customer/register" ><button type="Submit" className="cus-btn-register">Register</button></Link> 
            </div> 
            </form>
        </div>
    )
}