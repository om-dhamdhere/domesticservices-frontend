import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
import "./service1.css";
import female1 from "../src/new_images/female1.jpg";
import female2 from "../src/new_images/female2.png";
import female3 from "../src/new_images/female3.png";

class ServiceFemale extends Component {
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

              <div class="dashboard-nav-item">
                <Link
                  style={{ fontSize: 24 }}
                  className="nav-link"
                  to={"/login"}
                >
                  Logout
                </Link>
              </div>
            </nav>
          </div>
        </div>

        

       
        <div class="card mb-3 my-5 mx-auto" style={{ maxWidth: 600 }}>
          <div class="row g-0">
            <div class="col-md-4  ">
              <img
                src={female1}
                class="img-fluid rounded-start"
                alt="driver1"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title" style={{ fontSize: 25 }}>
                  Name: Tanaya Daundkar
                </h3>
                <p class="card-text" style={{ fontSize: 20 }}>
                  Experience: 5 years
                </p>
                
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
              <img
                src={female2}
                class="img-fluid rounded-start"
                alt="driver1"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title" style={{ fontSize: 25 }}>
                  Name: Himali Gaikwad
                </h3>
                <p class="card-text" style={{ fontSize: 20 }}>
                  Experience: 3 years
                </p>
               
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
              <img
                src={female3}
                class="img-fluid rounded-start"
                alt="driver1"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title" style={{ fontSize: 25 }}>
                  Name: Aishwarya Bhalme
                </h3>
                <p class="card-text" style={{ fontSize: 20 }}>
                  Experience: 3 years
                </p>
  
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

export default ServiceFemale;
