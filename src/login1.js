import React from 'react';
import axios from "axios";
import {Link, Navigate} from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Card, Container, Col, Row, Form , Button} from "react-bootstrap";


class SignIn extends React.Component 
{
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

      render()
      {
        const { history } = this.props;
        return(
            <>
            {this.state.status && (
          <Navigate to="/newservice" replace={true} />
        )}
    <MDBContainer className="pt-5 mt-5 my-5" >

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/fluid/city/055.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
           

                <Card.Body className="pt-5">
                  <Form onSubmit={this.changeSubmit}>
                    <Form.Group className="pt-5 mb-3">
                      <Form.Control style={{fontSize:20}}
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.changeHandler}
                        placeholder="Email"
                      />
                    </Form.Group>

                    <Form.Group className="pt-3 mb-3">
                      <Form.Control style={{fontSize:20}}
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
                      <Button style={{ textAlign: "center", fontSize:20, marginLeft:275}}
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
                      <Button variant="link" style={{ color: "black", fontSize:18, marginTop: 15, marginLeft:170}}>
                        <Link to="/signup" className="text-dark">
                          Don't Have an Account, Register !
                        </Link>
                      </Button>
                    </Form.Group>
                  </Form>
                </Card.Body>

          </MDBCol>
          
        </MDBRow>
      </MDBCard>

    </MDBContainer>
    </>
  )
};
}

export default SignIn;