import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Component } from "react";
import { Row, Navbar, NavItem, Nav, Container, Button } from "react-bootstrap";
import "./service1.css";
import Driver from "../src/new_images/driver.png";
import Teacher from "../src/new_images/Teacher.png";
import Nurse from "../src/new_images/nurse.png";
import Cook from "../src/new_images/Cook.jpg";
import Maid from "../src/new_images/maid.png";
import Eldercare from "../src/new_images/eldercare.webp";

class NewService extends React.Component {
  logout = (e) => {
    const navigate = useNavigate();
    document.cookie =
      "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/login");
  };
  render() {
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
          <div class="dashboard-content">
            <div class="container-fluid">
              <div class="row">
                <div class="card-deck">
                  <div class="card">
                    <img
                      style={{ height: 200, width: 200 }}
                      class="card-img-fluid"
                      src={Driver}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h2 style={{ textAlign: "center" }} class="card-title">
                        Driver
                      </h2>
                      <Link
                        to="/gender"
                        style={{ fontSize: 20, marginInline: 140 }}
                        class="btn btn-secondary"
                      >
                        Select
                      </Link>
                    </div>
                  </div>
                  <div class="card">
                    <img
                      style={{ height: 200, width: 200 }}
                      class="card-img-fluid"
                      src={Teacher}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h2 style={{ textAlign: "center" }} class="card-title">
                        Teacher
                      </h2>
                      <Link
                        to="/gender"
                        style={{ fontSize: 20, marginInline: 140 }}
                        class="btn btn-secondary"
                      >
                        Select
                      </Link>
                    </div>
                  </div>
                  <div class="card">
                    <img
                      style={{ height: 200, width: 200 }}
                      class="card-img-fluid"
                      src={Nurse}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h2 style={{ textAlign: "center" }} class="card-title">
                        Nurse
                      </h2>
                      <Link
                        to="/gender"
                        style={{ fontSize: 20, marginInline: 140 }}
                        class="btn btn-secondary"
                      >
                        Select
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="card-deck">
                  <div class="card">
                    <img
                      style={{ height: 200, width: 200 }}
                      class="card-img-fluid"
                      src={Cook}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h2 style={{ textAlign: "center" }} class="card-title">
                        Cook
                      </h2>
                      <Link
                        to="/gender"
                        style={{ fontSize: 20, marginInline: 140 }}
                        class="btn btn-secondary"
                      >
                        Select
                      </Link>
                    </div>
                  </div>
                  <div class="card">
                    <img
                      style={{ height: 200, width: 200 }}
                      class="card-img-fluid"
                      src={Maid}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h2 style={{ textAlign: "center" }} class="card-title">
                        Maid
                      </h2>
                      <Link
                        to="/gender"
                        style={{ fontSize: 20, marginInline: 140 }}
                        class="btn btn-secondary"
                      >
                        Select
                      </Link>
                    </div>
                  </div>
                  <div class="card">
                    <img
                      style={{ height: 200, width: 200 }}
                      class="card-img-fluid"
                      src={Eldercare}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h2 style={{ textAlign: "center" }} class="card-title">
                        Eldercare
                      </h2>
                      <Link
                        to="/gender"
                        style={{ fontSize: 20, marginInline: 140 }}
                        class="btn btn-secondary"
                      >
                        Select
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewService;
