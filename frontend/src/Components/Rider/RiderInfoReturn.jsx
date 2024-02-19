import React from 'react'
import './RiderInfoReturn.css'
import { Link } from 'react-router-dom'

const dummyData = [
  {
    date: '18/2/2024',
    orderNumber: '0040',
    pickUpTime: '7:00 PM',
    location: 'Bang Bo, Samut Prakan, 10560, The Rich Abac, 4th Floor',
  },
  // {
  //   date: '20/2/2024',
  //   orderNumber: '0010',
  //   // pickUpTime: '6:00 PM',
  //   location: 'Bang Bo, Samut Prakan, 10560, The Porch Condominium Abac, 7th Floor',
  // },
  // {
  //   date: '21/2/2024',
  //   orderNumber: '0021',
  //   // pickUpTime: '12:00 PM',
  //   location: 'Bang Bo, Samut Prakan, 10560, DCondo, 3rd Floor',
  // },
  // {
  //   date: '21/2/2024',
  //   orderNumber: '0034',
  //   // pickUpTime: '9:00 PM',
  //   location: 'Bang Bo, Samut Prakan, 10560,, The Groovy, 6th Floor',
  // },
]

function RiderInfoReturn() {
  return (
    <div className='rider-info-return-container'>
      <h1>Rider</h1>
      <div className='rider-info-return-info-container'>
        {dummyData.map((item, index) => (
          <div className='rider-info-return-info' key={index}>
            <h3>Date: {item.date}</h3>
            <h3>Order Number: {item.orderNumber}</h3>
            <h3>Pick Up Time: {item.pickUpTime}</h3>
            <h3>Location: {item.location}</h3>
            <div className='rider-info-return-detail'>
              <Link
                to={`/Rider/RiderHomeScreen/RiderInfoReturn/ReturnDetail`}
                className='rider-info-return-detail-btn'
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

export default RiderInfoReturn
