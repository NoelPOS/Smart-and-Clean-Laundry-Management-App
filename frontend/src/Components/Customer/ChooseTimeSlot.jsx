import React, { useState, useEffect } from 'react';
import './ChooseTimeSlot.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CustomerHeader from '../Common/CustomerHeader';
import axios, { AxiosError } from 'axios';

export default function CreateTimeSlot() {
  const [timeTables, setTimeTable] = useState();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const {id} = useParams()
  const navigate = useNavigate()

  const getTimeSchdule = async () => {
    try {
      const data = await axios.get("http://localhost:8080/api/shop/time_schedule");
      setTimeTable(data.data);
    } catch (err) {
      alert("cannot get data");
      console.log(err);
    }
  };

  const placeOrder = async () => {
    try{
      const results = await axios.post(`http://localhost:8080/api/shop/placeOrder`, 
        {
          customer_id: id,
          pick_up_date: selectedDate,
          pick_up_time: selectedTime,
          status: 'Just Ordered'
        })
        alert('Order Placed successfully.')
    }
    catch(error) {
      alert('Error placing orders', error)
    }
    try{
      const results = await axios.put(`http://localhost:8080/api/shop/updateTimeSchedule`, 
        {
          customer_id: id,
          pick_up_date: selectedDate,
          pick_up_time: selectedTime
        })
        alert('Selected data and time has booked for you.')
    }
    catch(error) {
      console.log(error)
    }
    // navigate(`/customer/pickingup/${id}`)
  } 
  

  useEffect(() => {
    getTimeSchdule();
  }, []);

  const handleTimeClick = (date, time) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  return (
    <div className='cus-timeslot-div'>
      <CustomerHeader />
      <h2 className='cus-timeslot-label'>Choose Available Time slots</h2>
      <div className='cus-timeslot-show'>
        {timeTables?.map(time => {
          if (time.customer_id === null) {
            return (
              <div className='cus-timetable-div' key={`${time.pick_up_date}-${time.pick_up_time}`}>
                <table className='cus-timeslot-table'>
                  <tr>
                    <td
                      className='cus-available-time'
                      onClick={() => handleTimeClick(time.pick_up_date, time.pick_up_time)}
                    >
                      {time.pick_up_date} :: {time.pick_up_time}
                    </td>
                  </tr>
                </table>
              </div>
            );
          }
          return null; // If customer_id is not null, don't render anything
        })}
      </div>

      <div className='cus-confirm-div'>
        <p>Selected Date: {selectedDate}</p>
        <br/>
        <p>Selected Time: {selectedTime}</p>
        <br/>
          <button className='cus-btn-confirm' onClick={placeOrder}>Confirm</button>
      </div>
    </div>
  );
}
