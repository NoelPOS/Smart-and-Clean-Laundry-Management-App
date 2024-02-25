import calendar from "./photos/cal.jpeg";
import avator from "./photos/profile.png";
import tracker from "./photos/delivery.jpeg";
import './CustomerHome.css';
import CustomerHeader from '../Common/CustomerHeader';
import React, { useRef } from 'react';
import { Link } from "react-router-dom";

function CustomerHome() {
 
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
 
  return (
    <div className="cus-home-div">
      <CustomerHeader/>
       
        <div className="cus-userbar-show">
          <div className="cus-space"></div>
          <h2 className="cus-username">Welcome Brandon </h2>
          <Link to="/customer/profile"><img className="cus-user-avator-img" src={avator} alt="avator"/></Link>
        </div>
       
    <div className="cus-scroll-container"  ref={containerRef}
    onWheel={handleWheel}>
 
      <div className="cus-scroll-fun">
       
        <div className="cus-bt-container">
          <img className="cal" src={calendar} alt="calendar"/>
          <Link to="/customer/chooseTimeSlot"> <h3 className="cus-link">Book an order</h3></Link>
            <p className="cus-order-p">Choose available Time slot to get the service.</p>
        </div>
 
        <div className="cus-bt-container">
          <img className="cal" src={tracker} alt="tracking"/>
          <Link to="/customer/showProcess"><h3 className="cus-link">Track your order</h3></Link>
           <p className="cus-track-p"> You can see when the rider will come to pick up ,
            <br></br>return and when the shop will do your laundry.</p>
        </div>
 
      </div>
 
    </div>
 
     <div className="cus-btn-div">
      < Link to="/customer/showHistory"><button className="cus-btn-history" >View History</button></Link>
      </div>
    </div>
  );
}

export default CustomerHome;