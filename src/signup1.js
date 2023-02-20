import React from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { Card, Container, Col, Row, Form, Button } from "react-bootstrap";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
  }

  changeHandler = (e) => {
    const key = e.target.name;
    const val = e.target.value;
    this.setState({
      [key]: val,
    });
  };

  changeSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/add", this.state) //adding user data to "users" collection
      .then((res) => console.log(res.data));
    this.setState({ fname: "", lname: "", email: "", password: "" });
  };

  render() {
    return (
      <>
        {this.state.status && <Navigate to="/service" replace={true} />}
        <MDBContainer className="pt-5 mt-5 my-5">
          <MDBCard>
            <MDBRow className="g-0">
              <MDBCol md="6">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/city/055.webp"
                  alt="login form"
                  className="rounded-start w-100"
                />
              </MDBCol>

              <MDBCol md="6">

                <Card.Body>
                  <Form onSubmit={this.changeSubmit}>
                    <Form.Group className="pt-5 mb-3">
                      <Form.Control
                        style={{ fontSize: 20 }}
                        type="name"
                        name="fname"
                        value={this.state.fname}
                        onChange={this.changeHandler}
                        placeholder="First Name"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        style={{ fontSize: 20 }}
                        type="name"
                        name="lname"
                        value={this.state.lname}
                        onChange={this.changeHandler}
                        placeholder="Last Name"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        style={{ fontSize: 20 }}
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.changeHandler}
                        placeholder="Email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
                        style={{ fontSize: 20 }}
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.changeHandler}
                        placeholder="Password"
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      style={{ alignItems: "center" }}
                    >
                      <Button
                        variant="dark"
                        type="submit"
                        style={{
                          textAlign: "center",
                          fontSize: 20,
                          marginTop: 20,
                          marginLeft: 275,
                        }}
                      >
                        Submit
                      </Button>
                      <br />
                      <br />
                      <Link
                        to="/login"
                        style={{
                          color: "black",
                          fontSize: 18,
                          marginTop: 15,
                          marginLeft: 170,
                        }}
                        className="text-dark"
                      >
                        Already have an account, Login!
                      </Link>
                    </Form.Group>
                  </Form>
                </Card.Body>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>
      </>
    );
  }
}

export default Register;
