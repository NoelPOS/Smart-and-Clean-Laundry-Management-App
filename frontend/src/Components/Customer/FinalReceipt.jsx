import React from "react";
import CustomerHeader from "../Common/CustomerHeader";
import DefaultReceipt from "./DefaultReceipt";
import "./FinalReceipt.css";
import plus from './photos/add.png';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import OrderItemCard from "./OrderItemCardCus";

export default function FinalReceipt(){
    const {id} = useParams()
    const navigate =useNavigate()
    const [orderId, setOrderId] = useState()
    const [orderItems, setOrderItems] = useState()

    const getOrderItems = async () => {
        try {
          const  data  = await axios.get(`http://localhost:8080/api/shop/getOrderId/${id}`);
          setOrderId(data.data);
          
        } catch (err) {
          alert("cannot get data");
          console.log(err);
        }
    };



    useEffect(() => {
        getOrderItems();
      }, []);
    
    if (orderId){
        console.log(orderId[0]?.order_id)
    }

    const getOrdersById = async (req,res) => {
        try {
          const  data  = await axios.get(`http://localhost:8080/api/shop/getOrderItems/${orderId[0]?.order_id}`);
          setOrderItems(data.data);
        } catch (err) {
          alert("cannot get data");
          console.log(err);
        }
    }


    const updatePayment = async(req,res) => {
        try {
            const  results  = await axios.put(`http://localhost:8080/api/shop/updatePaymentConfirm/${orderId[0]?.order_id}`);
            alert("Payment confirm has been updated.")
            navigate(`/customer/home/${id}`)
        } catch (err) {
            alert("Payment confirm is failed to update.");
            console.log(err);
        }
    }
    console.log(orderId)
    console.log(orderItems)
    return (
        <div className="cus-final-div">
            <CustomerHeader/>
            <p className="final-header">Here is the receipt after confirmation from shop</p>
            <button onClick={getOrdersById}>Get Receipt</button>
            <OrderItemCard orderItems={orderItems} />
            <p className="payment-label">Please upload your payment slip here</p>
            <div className="plus-img-div">
                <input type="file"/>
                <button>
                    <button onClick={updatePayment}>
                        <img src={plus} alt="plus" />
                    </button>
                </button>
            </div>
        </div>
    )
}