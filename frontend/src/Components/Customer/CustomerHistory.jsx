import React, { useEffect, useState } from 'react';
import CustomerHeader from '../Common/CustomerHeader';
import './CustomerHistory.css';
import {  useParams } from 'react-router-dom';
import axios from 'axios';

export default function History() {
  const { id } = useParams();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch order history data from backend API
    const fetchOrderHistory = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/shop/getcusorderhistory/${id}`);
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };

    fetchOrderHistory();
  }, [id]);

  return (
    <div>
      <CustomerHeader />
      <h2 className='cus-his-label'>Order history</h2>
      <div className="cus-his-div">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div className='cus-ohistory' key={order.order_id}>
              <p>
                Order number: {order.order_id}<br />
                Pick up Date: {order.pick_up_date}<br />
                Pick up Time: {order.pick_up_time}<br />
                Pick up Rider: {order.pick_up_rider}<br />
                Return Rider: {order.return_rider}<br />
              </p>
            </div>
          ))
        ) : (
          <p>No order history available</p>
        )}
      </div>
    </div>
  );
}
