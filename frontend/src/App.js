import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Nav from './Components/Nav';

import CustomerLogin from './Components/Customer/CustomerLogin';
import CustomerRegister from './Components/Customer/CustomerRegister';
import CustomerLocation from './Components/Customer/CustomerLocation';
import CustomerProfile from './Components/Customer/CustomerProfile';
import CusteomerHome from './Components/Customer/CusteomerHome';
import CustomerHistory from './Components/Customer/CustomerHistory';
import ChooseTimeSlot from './Components/Customer/ChooseTimeSlot';
import ShowProcess from './Components/Customer/ShowProcess';
import ChooseItems from './Components/Customer/ChooseItems';
import Receipt from './Components/Customer/Receipt';
import CustomerOrderConfirmation from './Components/Customer/CustomerOrderConfirmation';
import CustomerWaiting from './Components/Customer/CustomerWaiting';
import FinalReceipt from './Components/Customer/FinalReceipt';
import CustomerReceipt from './Components/Customer/CustomerReceipt';


import ShopHome from './Components/Shop/ShopHome';
import CustomerOrders from './Components/Shop/CustomerOrders';
import OrderHistory from './Components/Shop/OrderHistory';
import CreateTimeSlot from './Components/Shop/CreateTimeSlot';
import RiderRegisteration from './Components/Shop/RiderRegisteration';
import RiderEditDelete from './Components/Shop/RiderEditDelete';
import ShopRiderList from './Components/Shop/ShopRiderList';

import JustOrdered from './Components/Shop/JustOrdered';

import AvailableRiderList from './Components/Shop/AvailableRiderList';
import SuccessfulAssign from './Components/Shop/SuccessfulAssign';
import LaundryProcess from './Components/Shop/LaundryProcess';
import LaundryOngoing from './Components/Shop/LaundryOngoing';
import LaundryFinish from './Components/Shop/LaundryFinish';

import LaundryItems from './Components/Shop/LaundryItems';

import PickUpOngoing from './Components/Shop/PickUpOngoing';
import PickUpFinish from './Components/Shop/PickUpFinish'
import CheckItemsBeforePayment from './Components/Shop/CheckItemsBeforePayment';
import PaymentWaiting from './Components/Shop/PaymentWaiting';
import CustomerPaymentConfirm from './Components/Shop/CustomerPaymentConfirm';


import RiderPickupButton from './Components/Rider/RiderHomeScreen';
import RiderInfo from './Components/Rider/RiderInfo';
import PickUpDetail from './Components/Rider/PickUpDetail';
import Profile from './Components/Rider/Profile';
import PickUpCust from './Components/Rider/PickUpCust';
import ReturnDetail from './Components/Rider/ReturnDetail';
import ReturnCust from './Components/Rider/ReturnCust';
import PickUpSuccess from './Components/Rider/PickUpSuccess';
import RiderInfoReturn from './Components/Rider/RiderInfoReturn';
import ReturnSuccess from './Components/Rider/ReturnSuccess';
import ReportForm from './Components/Rider/ReportForm';
import ReportSuccess from './Components/Rider/ReportSuccess';
import Login from './Components/Rider/Login';
import AvailableRiderReturnList from './Components/Shop/AvailableRiderReturnList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />} />

          <Route path="/customer/login" element={<CustomerLogin />} />
          <Route path="/customer/register" element={<CustomerRegister/>} />
          <Route path="/customer/location" element={<CustomerLocation/>} />
          <Route path="/customer/profile" element={<CustomerProfile/>} />
          <Route path="/customer/home" element={<CusteomerHome />} />
          <Route path="/customer/showHistory" element={<CustomerHistory/>} />
          <Route path="/customer/chooseTimeSlot" element={<ChooseTimeSlot/>} />
          <Route path="/customer/showProcess" element={<ShowProcess/>} />
          <Route path="/customer/chooseItems" element={<ChooseItems/>}/>
          <Route path="/customer/Receipt" element={<Receipt/>}/>
          <Route path="/customer/orderConfirmation" element={<CustomerOrderConfirmation/>}/>
          <Route path="/customer/finalreceipt" element={<FinalReceipt/>}/>
          <Route path="/customer/pickingup" element={<CustomerWaiting/>}/>
          <Route path="/customer/orderhistory" element={<CustomerReceipt/>}/>
          


          {/* <Route path="/customer/home" element={<CusteomerHome />} /> */}

          <Route path="/shop/home" element={<ShopHome />} />
          <Route path="/shop/customerOrder" element={<CustomerOrders />} />
          <Route path="shop/past/order" element={<OrderHistory/>} />
          <Route path="shop/create/timeslots" element={<CreateTimeSlot/>} />
          <Route path="shop/create/rider" element={<RiderRegisteration/>} />
          <Route path="shop/riderDetails/:id" element={<RiderEditDelete/>} />
          <Route path="shop/riderList" element={<ShopRiderList/>} />


          /*pick up*/
          <Route path="shop/customerOrder/:id" element={<JustOrdered/>} />
          <Route path="shop/riderList/available/:id" element={<AvailableRiderList/>} />
          <Route path="shop/riderList/available/return/:id" element={<AvailableRiderReturnList/>} />
          <Route path="shop/pickup/successful" element={<SuccessfulAssign/>} />
          <Route path='shop/pickUpOngoing/:id' element={<PickUpOngoing/>}/>
          <Route path='shop/pickUpFinish/:id' element={<PickUpFinish/>}/>
          <Route path='shop/checkitems/:id' element={<CheckItemsBeforePayment/>}/>
          <Route path='shop/laundryItems' element={<LaundryItems/>}/>
          <Route path='shop/paymentWaiting/:id' element={<PaymentWaiting/>}/>

          <Route path='shop/pickUp/confirmPayment/:id' element={<CustomerPaymentConfirm/>} />
          

          <Route path='shop/laundry' element={<LaundryProcess/>}/>
          <Route path='shop/laundryOngoing/:id' element={<LaundryOngoing/>}/>
          <Route path='shop/laundryFinish/:id' element={<LaundryFinish/>}/>

          
          
          <Route path='Rider' element={<Login />} />
          <Route path='Rider/RiderHomeScreen' element={<RiderPickupButton />} />
          <Route path='Rider/RiderHomeScreen/RiderProfile'element={<Profile />}/>

          <Route
            path='Rider/RiderHomeScreen/RiderInfo'
            element={<RiderInfo />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfoReturn'
            element={<RiderInfoReturn />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfo/PickUpDetail'
            element={<PickUpDetail />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfoReturn/ReturnDetail'
            element={<ReturnDetail />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfo/PickUpDetail/PickUpCust'
            element={<PickUpCust />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfoReturn/ReturnDetail/ReturnCust'
            element={<ReturnCust />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfo/PickUpDetail/PickUpCust/PickUpSuccess'
            element={<PickUpSuccess />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfoReturn/ReturnDetail/ReturnCust/ReturnSuccess'
            element={<ReturnSuccess />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfoReturn/ReturnDetail/ReturnCust/ReportForm'
            element={<ReportForm />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfo/PickUpDetail/PickUpCust/ReportForm'
            element={<ReportForm />}
          />
          <Route
            path='Rider/RiderHomeScreen/RiderInfo/PickUpDetail/PickUpCust/ReportForm/ReportSuccess'
            element={<ReportSuccess />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
