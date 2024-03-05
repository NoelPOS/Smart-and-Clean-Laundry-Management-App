import React from 'react'
import rider from './rider3.jpg'
import profile from './profile.jpg'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './RiderHomeScreen.css'

export default function RiderPickupButton() {
  const { id } = useParams()
  console.log(id)
  return (
    <div className='home-container'>
      <div className='profile-container'>
        <Link to={`/Rider/RiderHomeScreen/RiderProfile/${id}`}>
          <img className='profile' src={profile} alt='' />
        </Link>
      </div>

      <div className='home-img-container'>
        <img className='rider' src={rider} alt='' />
        <h1>Rider</h1>
      </div>
      <div className='home-btn-container'>
        <button className='home-btn'>
          <Link className='home-link' to={`/Rider/RiderHomeScreen/${id}`}>
            Pickup from customer
          </Link>
        </button>
        <button className='home-btn'>
          <Link
            className='home-link'
            to={`/Rider/RiderHomeScreen/RiderReturn/${id}`}
          >
            Return to customer
          </Link>
        </button>
      </div>
    </div>
  )
}

// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function RiderPickupButton() {
//   return (
//     <div>
//         {/* Style the Link as a button */}
//         <Link to="/pickup" className="pickup-button">Pick up from customer</Link>
//         {/* Additional content can be added here */}
//     </div>
//   )
// }
