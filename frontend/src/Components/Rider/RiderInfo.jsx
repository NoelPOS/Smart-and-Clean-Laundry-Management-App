import React from 'react'
import './RiderInfo.css'
import { Link } from 'react-router-dom'

const dummyData = [
  {
    date: '20/2/2024',
    orderNumber: '0050',
    pickUpTime: '5:00 PM',
    location: 'Bang Bo, Samut Prakan, 10560, Origin Place Abac Bangna, 7th Floor',
  },
  // {
  //   date: '21/2/2024',
  //   orderNumber: '0026',
  //   pickUpTime: '1:00 PM',
  //   location: 'Bang Bo, Samut Prakan, 10560, Bann Pirawit, 2nd Floor',
  // },
  // {
  //   date: '11/4/2024',
  //   orderNumber: '0010',
  //   pickUpTime: '10:00 AM',
  //   location: 'The Rich',
  // },
  // {
  //   date: '11/5/2024',
  //   orderNumber: '0034',
  //   pickUpTime: '7:00 PM',
  //   location: 'Groovy',
  // },
]
function RiderInfo() {
  return (
    <div className='rider-info-container'>
      <h1>Rider</h1>
      <div className='info-container'>
        {dummyData.map((item, index) => (
          <div className='info' key={index}>
            <h3>Date: {item.date}</h3>
            <h3>Order Number: {item.orderNumber}</h3>
            <h3>Pick Up Time: {item.pickUpTime}</h3>
            <h3>Location: {item.location}</h3>
            <div className='rider-info-detail'>
              <Link
                to={`/Rider/RiderHomeScreen/RiderInfo/PickUpDetail`}
                className='rider-info-detail-btn'
              >
                Go to detail...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RiderInfo
