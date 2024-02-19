import React from "react";
import { Link } from "react-router-dom";
import './CustomerProfile.css';
import profile from './photos/profile.png';
import pencil from './photos/pencil.png';
import location from './photos/location.png';
import phone from './photos/phone.png';
import CustomerHeader from "../Common/CustomerHeader";
import { useState } from "react";

export default function CustomerProfile(){

        const [userInfo, setUserInfo] = useState({
          name: 'Brandon',
          phoneNumber: '0651086400',
          location: 'Origin Place ABAC Bang na Soi Nawamin 1, Bang Bo',
          profilePhoto: profile
        });
      
        // Function to handle profile photo upload
        const handlePhotoUpload = (event) => {
          const file = event.target.files[0];
          // Perform necessary file upload logic, e.g., using FormData or cloud storage SDK
          // After successful upload, update the user information state with the new photo path
          setUserInfo(prevState => ({
            ...prevState,
            profilePhoto: URL.createObjectURL(file)
          }));
        };
      
        // Function to handle name update
const handleNameUpdate = () => {
    const newName = prompt('Enter your new name:', userInfo.name);
    if (newName !== null) {
      setUserInfo(prevState => ({
        ...prevState,
        name: newName
      }));
    }
  };
  
  // Function to handle phone number update
  const handlePhoneNumberUpdate = () => {
    const newPhoneNumber = prompt('Enter your new phone number:', userInfo.phoneNumber);
    if (newPhoneNumber !== null) {
      setUserInfo(prevState => ({
        ...prevState,
        phoneNumber: newPhoneNumber
      }));
    }
  };
  
  // Function to handle location update
  const handleLocationUpdate = () => {
    const newLocation = prompt('Enter your new location:', userInfo.location);
    if (newLocation !== null) {
      setUserInfo(prevState => ({
        ...prevState,
        location: newLocation
      }));
    }
  };
  

    return(
        <div>
            <CustomerHeader/>

        <div className="cus-profile-div">
        <img 
          className="cus-profile-img"
          src={userInfo.profilePhoto} 
          alt="Profile" 
        />
        <label htmlFor="photo" style={{ position: 'absolute', top: '200px', right: '80px'}}>
          <img src={pencil} alt="Edit" className="cus-edit" />
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          style={{ display: 'none' }}
          id="photo"
        />
        </div>

        <div className="cus-name-div">
        <span>{userInfo.name}</span>
        <img 
          src={pencil} 
          alt="Edit" 
          style={{ width: '30px', height: '30px', cursor: 'pointer', marginLeft: '10px',marginTop:'50px',opacity:'0.5' }} 
          onClick={handleNameUpdate}
        />
        </div>

        <div className="cus-phone-div">
        <label htmlFor="phone" style={{ position: 'absolute', top: 75, right: 360}}> 
        <img src={phone} alt="phone" style={{width:'28px',height:'28px',marginRight:'10px',opacity:'0.5'}}/>
        </label>

        <span>{userInfo.phoneNumber}</span>
        <img 
          src={pencil} 
          alt="Edit" 
          style={{ width: '27px', height: '27px', cursor: 'pointer', marginLeft: '10px' ,marginTop:'75px',opacity:'0.5'}} 
          onClick={handlePhoneNumberUpdate}
        />
      </div>

      <div className="cus-loc-div">
      <label htmlFor="location" style={{ position: 'absolute', top: 65, right: 360}}> 
        <img src={location} alt="location" style={{width:'32px',height:'32px',marginRight:'10px',opacity:'0.5'}}/>
        </label>
        <span>{userInfo.location}</span>
        <img 
          src={pencil} 
          alt="Edit" 
          style={{ width: '27px', height: '27px', cursor: 'pointer', marginLeft: '10px' ,marginTop:'65px',opacity:'0.5'}} 
          onClick={handleLocationUpdate}
        />
      </div>
            
        <div className="cus-vnd-btn-div">
           <Link to="/customer/showHistory"><button className="btn-his">View History</button></Link> 
            <Link to="/customer/login"><button className="btn-del">Delete Account</button></Link>
        </div>
             
            
        </div>
    )
}