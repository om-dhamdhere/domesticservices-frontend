import React from "react";
import driver_1 from "../src/images/men.png";
import driver_2 from "../src/images/women.png";
import female from "../src/images/female.webp";
import male from "../src/images/male.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
// import "./gender.css"
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

function Gender() {
  return (
    <div style={{ marginTop: 125 }} class="card-group pt-5">
      <div class="card">
        <img
          style={{ height: 150, width: 200, marginInlineStart: 270 }}
          class="card-img-fluid"
          src={male}
          alt="Card image cap"
        />
        <div class="card-body">
          <h2 class="card-title text-center">Male</h2>
        </div>
        <Link
          to="/service_data"
          style={{
            fontSize: 20,
            width: 125,
            marginInlineStart: 315,
            alignContent: "center",
          }}
          class="btn btn-dark"
        >
          Select
        </Link>
      </div>
      <div style={{ width: 100 }} class="card ">
        <img
          style={{ height: 150, width: 200, marginInlineStart: 270 }}
          class="card-img-fluid"
          src={female}
          alt="Card image cap"
        />
        <div class="card-body">
          <h2 class="card-title text-center">Female</h2>
        </div>
        <Link
          to="/service_data_female"
          style={{
            fontSize: 20,
            width: 125,
            marginInlineStart: 315,
            alignContent: "center",
          }}
          class="btn btn-dark"
        >
          Select
        </Link>
      </div>
    </div>
  );
}

export default Gender;
