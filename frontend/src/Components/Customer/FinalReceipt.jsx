import React from "react";
import CustomerHeader from "../Common/CustomerHeader";
import ReceiptCard from "./ReceiptCard";
import "./FinalReceipt.css";

export default function FinalReceipt(){
    return (
        <div className="cus-final-div">
            <CustomerHeader/>
            <p className="final-header">Here is the receipt after confirmation from shop</p>
            <div className="cus-rcard"><ReceiptCard/></div>
            <p className="payment-label">Please upload your payment slip here</p>
            
        </div>
    )
}