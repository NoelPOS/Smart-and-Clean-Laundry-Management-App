import React from 'react'
import './CreateTimeSlot.css';
import {Link} from 'react-router-dom';
import ShopHeader from '../Common/ShopHeader';
export default function CreateTimeSlot() {

  
  return (
    <div className='cus-timeslot-div'>
        <ShopHeader/>
     <h2 className='cus-timeslot-label'>Create available time slot </h2>

     <div className='cus-timeslot-show'>

      <h2 className='cus-date'>Monday</h2>
        <div className='cus-timetable-div'>
          <table className='cus-timeslot-table'>
            <tr>
              <td className='cus-available-time'>9AM</td>
              <td className='cus-available-time'>10AM</td>
            </tr>
            <tr>
              <td className='cus-available-time'>5PM</td>
              <td className='cus-available-time'>6PM</td>
            </tr>
            <tr>
              <td className='cus-available-time'>7PM</td>
              <td className='cus-available-time'>9PM</td>
            </tr>
          </table>
        </div>

        <h2 className='cus-date'>Tuesday</h2>
        <div className='cus-timetable-div'>
          <table className='cus-timeslot-table'>
            <tr>
              <td className='cus-available-time'>9AM</td>
              <td className='cus-available-time'>10AM</td>
            </tr>
            <tr>
              <td className='cus-available-time'>5PM</td>
              <td className='cus-available-time'>6PM</td>
            </tr>
            <tr>
              <td className='cus-available-time'>7PM</td>
              <td className='cus-available-time'>9PM</td>
            </tr>
          </table>
        </div>

        <h2 className='cus-date'>Wednesday</h2>
        <div className='cus-timetable-div'>
          <table className='cus-timeslot-table'>
            <tr>
              <td className='cus-available-time'>9AM</td>
              <td className='cus-available-time'>10AM</td>
            </tr>
            <tr>
              <td className='cus-available-time'>5PM</td>
              <td className='cus-available-time'>6PM</td>
            </tr>
            <tr>
              <td className='cus-available-time'>7PM</td>
              <td className='cus-available-time'>9PM</td>
            </tr>
          </table>
        </div>

        <div className='cus-confirm-div'>
         <Link to="/shop/home"> <button className='cus-btn-confirm'>Confirm</button></Link>
        </div>
     </div>
    </div>
  )}