import React from "react";
import axios from 'axios';
import {Component} from "react";
import { Card, Container, Col, Row, Form, Button } from "react-bootstrap";
// import {Link, useNavigate,RouterContext, useContext} from 'react-router-dom';
import { useNavigate, Link} from 'react-router-dom';
// import { RouterContext } from 'react-router-dom';





class Booking extends Component
{
    
    constructor(props)
    {
        super(props);

        /* Fetching all the required attributes displayed on the form */
        this.state=
        {
            fname:"", lname:"", email:"", date:"", enddate:""
        }
    }


    /* Setting all the data in key-value pairs */
    changeHandler=(e)=>
    {
        const key=e.target.name;
        const val=e.target.value
        this.setState({
            [key]:val
            })
    }

    changeSubmit=(e)=>
    {
        console.log(this.state);
        e.preventDefault();
        axios.post('http://localhost:5000/bookings/add', this.state)  //used to add data at respective backend database
        .then(res => console.log(res.data))
        this.setState({fname:"", lname:"", email:"", date:"", enddate:""});   //inserting all data in database
    }

    loadScript=(src)=>{
    return new Promise((resolve)=>{
        const script=document.createElement("script")

        script.src=src
        script.onload=()=>{
            resolve(true)
        }

        script.onerror=()=>{
            resolve(false)
        }

        document.body.appendChild(script)

    })
}
    
    render()
    {
        
        return(
            <>
                <Container className="mt-3 pt-5" >     
                <Row className="mx-auto justify-content-center">
                    <Col xs={4}>
                        <Card className="shadow-lg" variant="dark">
                            <Card.Header className="p-3" style={{backgroundColor:"#443ea2"}}>
                                <h3 className="pt-2" style={{color: 'white', backgroundColor: '#443ea2', alignItems:"center"}}>Book Appointment</h3>
                            </Card.Header>

                            <Card.Body>
                                <Form onSubmit={this.changeSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" name="fname" value={this.state.fname} onChange={this.changeHandler} placeholder="First Name" required='true'/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" name="lname" value={this.state.lname} onChange={this.changeHandler} placeholder="Last Name" required='true'/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control type="email" name="email" value={this.state.email} onChange={this.changeHandler} placeholder="Email" required='true' />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control type="date" name="date" value={this.state.date} onChange={this.changeHandler} placeholder="Date" required='true' />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control type="date" name="enddate" value={this.state.enddate} onChange={this.changeHandler} placeholder="Endate" required='true'/>
                                    </Form.Group>

                                    {/* <Form.Select aria-label="Default select example" name="service" value={this.state.service} onChange={this.changeHandler}>
                                        <option>Available</option>
                                        <option value="1">Pratik Vavhal</option>
                                        <option value="2">Pradeep Memane</option>
                                        <option value="3">Akash Raskar</option>
                                    </Form.Select>
                                        <br/> */}
                                    <Form.Group className="mb-3" style={{alignItems:"center"}} >
                                        <Button style={{backgroundColor:'#443ea2'}} variant="dark" type="submit" onClick={this.handleClick} size="lg">Book</Button>
                                        <br/><br/>
                                        
                                        <Link to="/payments" style={{textAlign:"right", fontSize:20, color:'black', paddingRight:50}} variant="link">
                                            Online Payment
                                        </Link>
                                        <Link to="/payments1" style={{textAlign:"left", fontSize:20, color:'black'}} variant="link">
                                            Cash On Delivery
                                        </Link>
                                    </Form.Group>                                   
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}



export default Booking;