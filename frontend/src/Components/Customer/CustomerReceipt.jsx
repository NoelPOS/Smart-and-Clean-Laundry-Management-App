import React from "react";
import DefaultReceipt from "./DefaultReceipt";
import CustomerHeader from "../Common/CustomerHeader";

export default function CustomerReceipt(){
    return(
        <>
            <CustomerHeader/>
            <DefaultReceipt/>
        </>
    )
}