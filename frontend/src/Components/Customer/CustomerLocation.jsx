import React from "react";
import { Link } from "react-router-dom";
import './CustomerLocation.css';
import CustomerHeader from "../Common/CustomerHeader";

export default function CustomerLocation(){
    return(
        <div>
            <CustomerHeader/>
            <p className="cus-add-default-label">Address details</p>
            <div className="cus-add-input-div">
                <input type="text" placeholder="City/District/Postcode/Subdistrict" className="cus-add" required/>
                <input type="text" placeholder="House No,Soi,Moo,Street Name" className="cus-add" required/>
                <input type="text" placeholder="Unit/Floor" className="cus-add" required/>
                <input type="text" placeholder="Addtional notes for riders(Optional)" className="cus-add"/>                
            </div>
            <div className="cus-btn-sub-div">
                <Link to="/customer/home"><button className="cus-sub-btn">Submit</button></Link>
            </div>
        </div>
    )
}