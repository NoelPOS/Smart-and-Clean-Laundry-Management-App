import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import './CustomerProfile.css';
import profile from './photos/profile.png';
import pencil from './photos/pencil.png';
import location from './photos/location.png';
import phone from './photos/phone.png';
import CustomerHeader from "../Common/CustomerHeader";
import { useState,useEffect } from "react";
import axios from "axios";


export default function CustomerProfile(){
        const {id} = useParams();
        const navigate = useNavigate();
        const [userInfo, setUserInfo] = useState({
          name: '',
          phoneNumber: '',
          location: '',
          profilePhoto: profile
        });

        useEffect(() => {
          const fetchCustomerInfo = async () => {
            try {
              const response = await axios.get(`http://localhost:8080/api/shop/customer/${id}`);
              if (Array.isArray(response.data) && response.data.length > 0) {
                const customer = response.data[0];
                const updatedUserInfo = {
                  name: customer.customer_name ? customer.customer_name.trim() : '',
                  phoneNumber: customer.customer_number ? customer.customer_number.trim() : '',
                  location: customer.customer_address ? customer.customer_address.trim() : '',
                  profilePhoto: profile // Assuming profile is a default photo
                };
                setUserInfo(updatedUserInfo);
              } else {
                console.error('Empty response or invalid data:', response.data);
              }
            } catch (error) {
              console.error('Error fetching customer information:', error);
            }
          };
        
          fetchCustomerInfo();
        }, [id]);
        
        
      
        const deleteaccount = async () => {
          try {
            await axios.delete(`http://localhost:8080/api/shop/cusdelete/${id}`);
            alert("Account deleted successfully");
            navigate('/customer/login');
          } catch (error) {
            console.error("Error deleting account:", error);
            alert(error);
          }
        };
      

        // Function to handle name update
const handleNameUpdate = async () => {
  const newName = prompt('Enter your new name:', userInfo.name);
  if (newName !== null) {
    try {
      // Send a request to update the name
      const response = await axios.put(`http://localhost:8080/api/shop/updatecustomer/${id}`, { name: newName });
      if (response.status === 200) {
        // Update the state if the request was successful
        setUserInfo(prevState => ({
          ...prevState,
          name: newName
        }));
        alert('Name updated successfully!');
      } else {
        alert('Failed to update name. Please try again.');
      }
    } catch (error) {
      console.error('Error updating name:', error);
      alert('Failed to update name. Please try again.');
    }
  }
};

// Similar functions for handling phone number and location updates

  
const handlePhoneNumberUpdate = async () => {
  const newPhoneNumber = prompt('Enter your new phone number:', userInfo.phoneNumber);
  if (newPhoneNumber !== null) {
    try {
      // Send a request to update the phone number
      const response = await axios.put(`http://localhost:8080/api/shop/updatecustomer/${id}`, { phoneNumber: newPhoneNumber });
      if (response.status === 200) {
        // Update the state if the request was successful
        setUserInfo(prevState => ({
          ...prevState,
          phoneNumber: newPhoneNumber
        }));
        alert('Phone number updated successfully!');
      } else {
        alert('Failed to update phone number. Please try again.');
      }
    } catch (error) {
      console.error('Error updating phone number:', error);
      alert('Failed to update phone number. Please try again.');
    }
  }
};

const handleLocationUpdate = async () => {
  const newLocation = prompt('Enter your new location:', userInfo.location);
  if (newLocation !== null) {
    try {
      // Send a request to update the address
      const response = await axios.put(`http://localhost:8080/api/shop/updatecustomer/${id}`, { location: newLocation });
      if (response.status === 200) {
        // Update the state if the request was successful
        setUserInfo(prevState => ({
          ...prevState,
          location: newLocation
        }));
        alert('Address updated successfully!');
      } else {
        alert('Failed to update address. Please try again.');
      }
    } catch (error) {
      console.error('Error updating address:', error);
      alert('Failed to update address. Please try again.');
    }
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
          <button className="btn-his" onClick={deleteaccount} >Delete Account</button>
            {/* <Link to="/customer/login"><button className="btn-del">Delete Account</button></Link> */}
        </div>
             
            
        </div>
    )
}