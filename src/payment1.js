import "./payment1.css";
import React from "react";
import {
  Card,
  Container,
  Col,
  Row,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import COD from "../src/new_images/COD.jpg";
import Swal from "sweetalert2";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";
import { Link } from "react-router-dom";

const MySwal = withReactContent(Swal);

function Payment1() {
  const handleSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Booking Succesful",
      time: 20000,
    });
  };

  //function to display unsuucesful alert message
  const handleFailure = () => {
    MySwal.fire({
      icon: "error",
      title: "Error",
      time: 4000,
    });
  };

  const [formData, setFormData] = useState({
    address1: "",
    address2: "",
    city: "",
    pin: "",
    state: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/cod/add", formData)
      .then((response) => {
        console.log("Data successfully stored in MongoDB!");
        handleSuccess();
      })
      .catch((error) => {
        console.error("Error storing data in MongoDB:", error);
        handleFailure();
      });
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    // <h1>COD</h1>

    <>
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
      </div>

      <Card className="mb-3 my-5 mx-auto" style={{ width: 400 }}>
        <Card.Img
          style={{ height: 250, width: 400 }}
          variant="fluid"
          src={COD}
        />
        <Card.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="address1"
                placeholder="Address Line 1"
                required="true"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="address2"
                placeholder="Address Line 2"
                required="true"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="city"
                placeholder="City"
                required="true"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="pin"
                placeholder="Pin"
                required="true"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Select
              aria-label="Default select example"
              name="state"
              onChange={handleInputChange}
            >
              <option>State</option>
              <option value="1">Maharashtra</option>
              <option value="2">Gujrat</option>
              <option value="3">Kerala</option>
              <option value="4">Tamil Nadu</option>
              <option value="5">Goa</option>
            </Form.Select>

            <Button
              className="mt-5"
              style={{
                backgroundColor: "#443ea2",
                alignItems: "center",
                marginInlineStart: 150,
              }}
              variant="dark"
              type="submit"
              size="lg"
            >
              Confirm
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default Payment1;
