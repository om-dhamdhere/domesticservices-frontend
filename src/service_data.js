import React from "react";
import { Component } from "react";
import driver_1 from "../src/images/men.png";
import driver_2 from "../src/images/women.png";
import driver_3 from "../src/images/men.png";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
import "./service1.css";
import male1 from "../src/new_images/male1.png";
import male2 from "../src/new_images/male2.jpg";
import male3 from "../src/new_images/male3.png";

class Service extends Component {
  render() {
    return (
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
              {/* <a
                        href="#" class="dashboard-nav-item"><i class="fas fa-sign-out-alt"></i> */}
              <div class="dashboard-nav-item">
                <Link style={{fontSize: 24}} className="nav-link" to={"/login"}>
                  Logout
                </Link>
              </div>
              {/* Logout </a> */}
            </nav>
          </div>
        </div>

        {/* <nav class="navbar navbar-expand-sm navbar-dark bg-dark py-0">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <a class="navbar-brand" href="#">
                  <img
                    src={logo}
                    alt=""
                    width="50"
                    height="50"
                    class="d-inline-block align-text-top"
                    style={{ fontSize: 25 }}
                  />
                </a>
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/service"
                    style={{ fontSize: 25 }}
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#" style={{ fontSize: 25 }}>
                    Contact Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#" style={{ fontSize: 25 }}>
                    About
                  </a>
                </li>
                <li class="nav-item d-block float-end" style={{ fontSize: 25 }}>
                  <Link className="nav-link" to={"/login"}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

        {/* <h1 style={{textAlign:"center", fontSize:30}}>Driver Information</h1> */}
        <div class="card mb-3 my-5 mx-auto" style={{ maxWidth: 600 }}>
          <div class="row g-0">
            <div class="col-md-4  ">
              <img src={male1} class="img-fluid rounded-start" alt="driver1" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title" style={{ fontSize: 25 }}>
                  Name: Pratik Vavhal
                </h3>
                <p class="card-text" style={{ fontSize: 20 }}>
                  Experience: 5 years
                </p>
                {/* <p class="card-text" style={{fontSize:20}}> Description: Worked with renowed companies like OLA, UBER.
                </p> */}
                <div class="text-center pt-5">
                  <Link
                    to="/bookings"
                    style={{ alignItems: "center", fontSize: 20 }}
                    class="btn btn-dark"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3 my-5 mx-auto" style={{ maxWidth: 600 }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={male2} class="img-fluid rounded-start" alt="driver1" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title" style={{ fontSize: 25 }}>
                  Name: Pradeep Memane
                </h3>
                <p class="card-text" style={{ fontSize: 20 }}>
                  Experience: 3 years
                </p>
                {/* <p class="card-text" style={{fontSize:20}}> Description: 5 star rating driver on OLA, UBER.
                </p> */}
                <div class="text-center pt-5">
                  <Link
                    to="/bookings"
                    style={{ alignItems: "center", fontSize: 20 }}
                    class="btn btn-dark"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3 my-5 mx-auto" style={{ maxWidth: 600 }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={male3} class="img-fluid rounded-start" alt="driver1" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title" style={{ fontSize: 25 }}>
                  Name: Akash Raskar
                </h3>
                <p class="card-text" style={{ fontSize: 20 }}>
                  Experience: 3 years
                </p>
                {/* <p class="card-text" style={{fontSize:20}}> Description: Worked in OLA for 3 years</p> */}
                <div class="text-center pt-5">
                  <Link
                    to="/bookings"
                    style={{ alignItems: "center", fontSize: 20 }}
                    class="btn btn-dark"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Service;
