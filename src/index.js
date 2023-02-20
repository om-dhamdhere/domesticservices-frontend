import React from "react";
import ReactDOM from "react-dom";
import Login from "./login";
import Signup from "./signup";
import Cards from "./cards_data";
import Service from "./service_data";
import Booking from "./book_service";
import Payment from "./payment";
import Gender from "./gender";
import SignIn from "./login1";
import Register from "./signup1";
import Payment1 from "./payment1";
import NewService from "./service1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServiceFemale from "./service_data_female";
import BookingFemale from "./book_service_female";

ReactDOM.render(
  <>
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/newservice" element={<NewService />} />
        <Route exact path="/service" element={<Cards />} />
        <Route exact path="/service_data" element={<Service />} />
        <Route exact path="/service_data_female" element={<ServiceFemale />} />
        <Route exact path="/bookings" element={<Booking />} />
        <Route exact path="/bookingsfemale" element={<BookingFemale />} />
        <Route exact path="/payments" element={<Payment />} />
        <Route exact path="/payments1" element={<Payment1 />} />
        <Route exact path="/gender" element={<Gender />} />
      </Routes>
    </Router>
  </>,
  document.getElementById("root")
);
