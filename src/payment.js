import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { Card, Container, Col, Row, Form, Button } from "react-bootstrap";
import Online from "../src/new_images/online1.jpg";

const MySwal = withReactContent(Swal);

function Payment() {
  const [service] = useState({
    name: "Driver Service",
    price: 500,
  });

  //function to display suucesful alert message
  const handleSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Payment was successful",
      time: 4000,
    });
  };

  //function to display unsuucesful alert message
  const handleFailure = () => {
    MySwal.fire({
      icon: "error",
      title: "Payment was not successful",
      time: 4000,
    });
  };

  async function handleToken(token, addresses) {
    const response = await axios.post("http://localhost:5000/checkout", {
      token,
      service,
    });
    console.log(response.status);

    if (response.status === 200) {
      //call handleSuccess funnction if the response from server-side is 200
      handleSuccess();
    } else {
      handleFailure(); //call handleFailure function
    }
  }

  return (
    <div class="dashboard">
      <div class="dashboard-nav">
        <header>
          <a href="#!" class="menu-toggle">
            <i class="fas fa-bars"></i>
          </a>
          <a href="#" class="brand-logo">
            <i class="fas fa-anchor"></i> <span>Domestic Service</span>
          </a>
        </header>
        <nav class="dashboard-nav-list">
          <a style={{ fontSize: 24 }} href="#" class="dashboard-nav-item">
            <i class="fas fa-home"></i>
            Home{" "}
          </a>

          <a
            style={{ fontSize: 24 }}
            href="/book_service"
            class="dashboard-nav-item"
          >
            <i class="fas fa-file-upload"></i> About US{" "}
          </a>

          <a style={{ fontSize: 24 }} href="#" class="dashboard-nav-item">
            <i class="fas fa-cogs"></i> Contact US{" "}
          </a>
          <a style={{ fontSize: 24 }} href="#" class="dashboard-nav-item">
            <i class="fas fa-user"></i> Settings{" "}
          </a>
          <div class="nav-item-divider"></div>

          <div class="dashboard-nav-item">
            <Link style={{ fontSize: 24 }} className="nav-link" to={"/login"}>
              Logout
            </Link>
          </div>
        </nav>
      </div>
      <div class="dashboard-app">
        <div class="dashboard-content"></div>
      </div>

      <div>
        <Card
          className="mb-3 my-5 mx-auto align-items-center"
          style={{ width: 350 }}
        >
          <Card.Img
            style={{ height: 250, width: 350 }}
            variant="fluid"
            src={Online}
          />
          <Card.Body>
            <div className="pt-5" style={{ paddingInlineStart: 5 }}>
              <StripeCheckout
                stripeKey="pk_test_51MHMreSGvcAlF106CfhXkHOBXwb6laiHTFCHIVw9mKIHlJbXuZ4LfFWlUdMB1VfiOwE7AXSTbq2BAfihsafB9nJF00x1N8qmpw"
                label="Pay Now"
                name="Pay With Credit Card"
                billingAddress
                shippingAddress
                amount={service.price * 100}
                description={`Your total is Rs${service.price}`}
                token={handleToken}
              />
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Payment;
