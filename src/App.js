import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Orders from "./Components/Orders/Orders";
import BookingDetails from "./Components/Orders/BookingDetails";
import UserChat from "./Components/ChatBot/UserChat";


import SingleServicePage from "./Components/Services/Cleaning/SinglePages/SingleServicePage";
import BookingSummery from "./Components/Services/Cleaning/SinglePages/BookingSummery/BookingSummery";
import AddressPage from "./Components/Services/Cleaning/SinglePages/BookingSummery/AddressPage";


import Adminhome from "./Components/Adminrole/Adminhome";
import AdminUsers from "./Components/Adminrole/Users/AdminUsers";
import AddUser from "./Components/Adminrole/Users/AddUser";
import ServicesList from "./Components/Adminrole/Services/ServicesList";
import AddService from "./Components/Adminrole/Services/AddService";
import AdminChat from "./Components/Adminrole/AdminChat/AdminChat";



import SuperAdminHome from "./Components/Superadminrole/Superadminhome";
import Cart from "./Components/Cart/Cart";
import NotFound from "./Components/Error/ErrorPage";
import AdminBookingList from "./Components/Adminrole/BookingList/AdminBookingList";
import Notifications from "./Components/Notifications/Notifications";
import Test from "./Components/Test";






function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path="/services/singleservicepage/:id" element={<SingleServicePage/>}></Route>
    <Route path="/services/singleservicepage/bookingsummery/:id" element={<BookingSummery/>}></Route>
    <Route path="/addresspage" element={<AddressPage/>}></Route>
    

    <Route path="/cart" element={<Cart/>}></Route>


    <Route path="/orders" element={<Orders/>}></Route>
    <Route path="/bookingdetails/:id" element={<BookingDetails />} />

   
    <Route path="/notifications" element={<Notifications/>}></Route>
    <Route path="/userchat" element={<UserChat/>}></Route>
    <Route path="/adminchat" element={<AdminChat/>}></Route>




    




    <Route path="/dashboard" element={<Adminhome/>}></Route>
    <Route path="/dashboard/users" element={<AdminUsers/>}></Route>
    <Route path="/adduser" element={<AddUser/>}></Route>
    <Route path="/dashboard/services" element={<ServicesList/>}></Route>
    <Route path="/dashboard/addservice" element={<AddService/>}></Route>
    <Route path="/dashboard/bookings" element={<AdminBookingList/>}></Route>


    <Route path="/superadminhome" element={<SuperAdminHome/>}></Route>

    <Route path="*" element={<NotFound />} />
    <Route path="/test" element={<Test />} />


    


    </Routes>

    </Router>
    
    </>
  );
}

export default App;
