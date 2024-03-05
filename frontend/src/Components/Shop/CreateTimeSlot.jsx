import React, { useState, useEffect } from 'react';
import './CreateTimeSlot.css';
import { Link } from 'react-router-dom';
import ShopHeader from '../Common/ShopHeader';
import axios from 'axios';

export default function CreateTimeSlot() {
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedDateTime, setSelectedDateTime] = useState({ date: '', time: '' });

  const getTimeSlots = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/shop/time_schedule");
      setTimeSlots(data);
    } catch (error) {
      console.error('Error fetching time slots:', error);
      alert("Cannot get data. Please try again.");
    }
  };

  useEffect(() => {
    getTimeSlots();
  }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedDateTime(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/shop/createTimeSlot', {
        pick_up_date: selectedDateTime.date,
        pick_up_time: selectedDateTime.time
      });
      alert('Time slot added successfully!');
      // Refresh time slots after adding
      getTimeSlots();
    } catch (error) {
      console.error('Error adding time slot:', error);
      alert('Error adding time slot. Please try again.');
    }
  };

  return (
    <div className='create-time-slot'>
      <ShopHeader />
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='date'>Date: </label>
        <input type='date' id='date' name='date' value={selectedDateTime.date} onChange={handleInputChange} />
        <label htmlFor='time'>Time: </label>
        <input type='time' id='time' name='time' value={selectedDateTime.time} onChange={handleInputChange} />
        <button type='submit' className='create-time-slot__btn'>Create</button>
      </form>
      <h2 className='create-time-slot__label'>Created time slots</h2>
      <div className='create-time-slot__list'>
        {timeSlots.map((timeSlot, index) => (
          <div className='create-time-slot__item' key={index}>
            <p>{timeSlot.pick_up_date} :: {timeSlot.pick_up_time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
