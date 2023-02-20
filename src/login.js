import React from "react";
import "./Login.css";
import {Link, Navigate} from "react-router-dom";
import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Card, Container, Col, Row, Form } from "react-bootstrap";
import Cards from "./cards_data";
import axios from "axios";

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      status: false
    };
  }
  changeHandler = (e) => {
    e.preventDefault()
    console.log(e.target);
    const key = e.target.name;
    const val = e.target.value;

    console.log(key, ": ", val);

    this.setState({ [key]: val });
  };

  changeSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/login", this.state)  //inserting data at respective backend database
      .then((res) => {
        if(res.data.message=="Login Succesfull!")
        {
            console.log("dksj")
            this.setState({ status: true });
            document.cookie = "username=" + res.data.token;  //storing the username in a cookie to use it throughout our application
        }

        else{
            alert(res.data.message)
        }
      });
        this.setState({ email: "", password: "" });

  };

  render() {

    const { history } = this.props;
    return (
      <>
        {this.state.status && (
          <Navigate to="/service" replace={true} />
        )}
        {/* <div style={{ backgroundImage:`url(${logo})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:1000,width:1000
    }}> */}
        
        {/* <h1 className="login_heading">PT</h1> */}
        {/* <Col xs={2}>
          <img src={logo} className="img-fluid justify-content-right" />
        </Col> */}
         <div className="mx-auto justify-content-center">
         <img src={logo} alt="logo" className="logo" />
         </div>
        <Container className="mt-3 justify-content-center">
          <Row className="mx-auto justify-content-center">        
            <Col xs={4}>
              <Card className="shadow-lg" variant="dark">
                <Card.Header
                  className="p-3"
                  style={{ backgroundColor: "rgb(33,37,41)" }}
                >
                  <h4
                    style={{
                      color: "white",
                      backgroundColor: "rgb(33,37,41)",
                      alignItems: "center",
                    }}
                  >
                    Login
                  </h4>
                </Card.Header>

                <Card.Body>
                  <Form onSubmit={this.changeSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.changeHandler}
                        placeholder="Email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Control
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
                        onClick={this.changeSubmit}
                      >
                        Login
                      </Button>
                    </Form.Group>

                    <Form.Group
                      className="mb-1"
                      style={{ alignItems: "center" }}
                    >
                      <Button variant="link" style={{ color: "black" }}>
                        <Link to="/signup" className="text-dark">
                          Sign Up!
                        </Link>
                      </Button>
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
       
        {/* </div> */}
      </>
    );
  }
}

export default Login;
