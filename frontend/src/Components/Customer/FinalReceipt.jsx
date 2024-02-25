import React from "react";
import CustomerHeader from "../Common/CustomerHeader";
import DefaultReceipt from "./DefaultReceipt";
import "./FinalReceipt.css";
import plus from './photos/add.png';
import { Link } from "react-router-dom";

export default function FinalReceipt(){
    return (
        <div className="cus-final-div">
            <CustomerHeader/>
            <p className="final-header">Here is the receipt after confirmation from shop</p>
            <div className="cus-rcard"><DefaultReceipt/></div>
            <p className="payment-label">Please upload your payment slip here</p>
            <div className="plus-img-div">
                <input type="file"/>
                <button>
                    <Link to="/customer/home">
                        <img src={plus} alt="plus" />
                    </Link>
                </button>
            </div>
        </div>
    )
}