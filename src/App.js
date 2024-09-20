import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Orders from "./Components/Orders/Orders";
import BookingDetails from "./Components/Orders/BookingDetails";

import SingleServicePage from "./Components/Services/Cleaning/SinglePages/SingleServicePage";
import BookingSummery from "./Components/Services/Cleaning/SinglePages/BookingSummery/BookingSummery";
import AddressPage from "./Components/Services/Cleaning/SinglePages/BookingSummery/AddressPage";


import Adminhome from "./Components/Adminrole/Adminhome";
import AdminUsers from "./Components/Adminrole/Users/AdminUsers";
import AddUser from "./Components/Adminrole/Users/AddUser";
import ServicesList from "./Components/Adminrole/Services/ServicesList";
import AddService from "./Components/Adminrole/Services/AddService";


import SuperAdminHome from "./Components/Superadminrole/Superadminhome";
import Cart from "./Components/Cart/Cart";
import NotFound from "./Components/Error/ErrorPage";
import AdminBookingList from "./Components/Adminrole/BookingList/AdminBookingList";
import Notifications from "./Components/Notifications/Notifications";
import Chat from "./Components/Chat/Chat";






function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/Chat" element={<Chat/>}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path="/services/singleservicepage/:id" element={<SingleServicePage/>}></Route>
    <Route path="/services/singleservicepage/bookingsummery/:id" element={<BookingSummery/>}></Route>
    <Route path="/addresspage" element={<AddressPage/>}></Route>
    

    <Route path="/cart" element={<Cart/>}></Route>


    <Route path="/orders" element={<Orders/>}></Route>
    <Route path="/bookingdetails/:id" element={<BookingDetails />} />

   
    <Route path="/notifications" element={<Notifications/>}></Route>


    <Route path="/adminhome" element={<Adminhome/>}></Route>
    <Route path="/adminUsers" element={<AdminUsers/>}></Route>
    <Route path="/adduser" element={<AddUser/>}></Route>
    <Route path="/servicesList" element={<ServicesList/>}></Route>
    <Route path="/addService" element={<AddService/>}></Route>
    <Route path="/adminbookinglist" element={<AdminBookingList/>}></Route>


    <Route path="/superadminhome" element={<SuperAdminHome/>}></Route>

    <Route path="*" element={<NotFound />} />


    


    </Routes>

    </Router>
    
    </>
  );
}

export default App;
