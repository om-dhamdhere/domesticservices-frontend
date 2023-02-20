import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Component } from "react";
import Card from "./cards";
import "bootstrap/dist/css/bootstrap.min.css";
import driver from "../src/images/driver.png";
import teacher from "../src/images/teacher.png";
import laundry from "../src/images/laundry.png";
import cook from "../src/images/cook.png";
import maid from "../src/images/maid.png";
import nurse from "../src/images/nurse.png";
import electrician from "../src/images/electrician.png";
import repair from "../src/images/repair.png";
import logo from "./logo.png";
import { Row, Navbar, Nav, Container, Button } from "react-bootstrap";

class Cards extends Component {
  logout = (e) => {
    const navigate = useNavigate();
    document.cookie =
      "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/login");
  };

  render() {
    return (
      <>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark py-0">
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
                    href="#"
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
        </nav>

        <div className="container-fluid">
          <div classname="row justify-content-center my-3">
            <div className="col-md-3">
              <Card
                imgsrc={driver}
                title="Driver"
                data="Something about driver"
              />
            </div>

            <div className="col-md-3">
              <Card
                imgsrc={teacher}
                title="Teacher"
                data="Something about teacher"
              />
            </div>

            <div className="col-md-3">
              <Card imgsrc={nurse} title="Nurse" data="Something about nurse" />
            </div>

            <div className="col-md-3">
              <Card
                imgsrc={electrician}
                title="Electrician"
                data="Something about Electricity"
              />
            </div>
          </div>

          <div classname="row justify-content-center my-3">
            <div className="col-md-3">
              <Card imgsrc={cook} title="Cook" data="Something about cook" />
            </div>

            <div className="col-md-3">
              <Card imgsrc={maid} title="Maid" data="Something about maid" />
            </div>

            <div className="col-md-3">
              <Card
                imgsrc={laundry}
                title="Laundry"
                data="Something about laundry"
              />
            </div>

            <div className="col-md-3">
              <Card
                imgsrc={repair}
                title="Repair"
                data="Something about repair"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cards;
