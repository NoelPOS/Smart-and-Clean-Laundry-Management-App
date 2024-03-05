import calendar from "./photos/cal.jpeg";
import avator from "./photos/profile.png";
import tracker from "./photos/delivery.jpeg";
import './CustomerHome.css';
import CustomerHeader from '../Common/CustomerHeader';
import React, { useRef } from 'react';
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function CustomerHome() {
  const {id} = useParams()
  const [customer, setCustomer] = useState(null);

  const getCustomerById = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/shop/getCustomerById/${id}`);
      setCustomer(response.data);
    } catch (error) {
      console.error('Error fetching customer details:', error);
      alert("Cannot get data");
    }
  };
  useEffect(() => {
    getCustomerById();
  }, [])
  //scroll with mouse wheel
  const containerRef = useRef(null);
  const handleWheel = (e) => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + e.deltaY,
        behavior: 'smooth'
      });
    }
  };
  // console.log(customer[0].customer_name)
  console.log(customer)
 
  return (
    <div className="cus-home-div">
      <CustomerHeader/>
       
        <div className="cus-userbar-show">
          <div className="cus-space"></div>
          {customer ? (
          <>
            <h2 className="cus-username">Welcome {customer[0].customer_name}</h2>
            <Link to={`/customer/profile/${id}`}>
            <img className="cus-user-avator-img" src={avator} alt="avator"/>
            </Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
        </div>
       
    <div className="cus-scroll-container"  ref={containerRef}
    onWheel={handleWheel}>
 
      <div className="cus-scroll-fun">
       
        <div className="cus-bt-container">
          <img className="cal" src={calendar} alt="calendar"/>
          <Link to={`/customer/chooseTimeSlot/${id}`}> <h3 className="cus-link">Book an order</h3></Link>
            <p className="cus-order-p">Choose available Time slot to get the service.</p>
        </div>
 
        <div className="cus-bt-container">
          <img className="cal" src={tracker} alt="tracking"/>
          <Link to={`/customer/showProcess/${id}`}><h3 className="cus-link">Track your order</h3></Link>
           <p className="cus-track-p"> You can see when the rider will come to pick up ,
            <br></br>return and when the shop will do your laundry.</p>
        </div>
 
      </div>
 
    </div>
 
     <div className="cus-btn-div">
      < Link to={`/customer/showHistory\${id}`}><button className="cus-btn-history" >View History</button></Link>
      </div>
    </div>
  );
}

export default CustomerHome;