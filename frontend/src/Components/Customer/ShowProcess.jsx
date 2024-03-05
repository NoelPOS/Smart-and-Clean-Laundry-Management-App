import React from 'react'
import CustomerHeader from '../Common/CustomerHeader';
import './ShowProcess.css';
import process from './photos/process.jpg'
import { Navigate, useNavigate, useParams } from 'react-router';

export default function ShowProcess() {
  const {id} = useParams()
  const navigate = useNavigate()

  const goToBills = async() => [
    navigate(`/customer/finalreceipt/${id} `)
  ]
  return (
        <div className='cus-show-p-div'>
            <CustomerHeader/>
        
         <h2 className='cus-process-label'>We are in the process of .......</h2>

         <img src={process} alt="processing" className='cus-sp-icon' />

         <div className='p-num-row1'>
            <div className="cus-pro-num1-column">
              <h3 className='cus-pro-circle1'>01</h3>
              <h3 className='cus-pro-label1'>Coming to pickup</h3>
            </div>
            <div className="cus-pro-num2-column" onClick={goToBills}>
              <h3 className='cus-pro-circle2'>02</h3>
              <h3  className='cus-pro-label2'>Sorting</h3>
            </div>
          </div>

        <div className='p-num-row2'>
          <div className="cus-pro-num3-column">
            <h3 className='cus-pro-circle3'>03</h3>
            <h3 className='cus-pro-label3'>Doing Laundry</h3>
          </div>
          <div className="cus-pro-num4-column">
            <h3 className='cus-pro-circle4'>04</h3>
            <h3 className='cus-pro-label4'>Returing your items</h3>
          </div>
        </div>
        </div>
  )
}