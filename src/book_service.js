import React from "react";
import axios from 'axios';
import {Component, useState} from "react";
import { Card, Container, Col, Row, Form, Button } from "react-bootstrap";
// import Cookies from 'js-cookie';
import { Cookies } from 'react-cookie';
// import {Link, useNavigate,RouterContext, useContext} from 'react-router-dom';
import { useNavigate, Link} from 'react-router-dom';
import Payment from "./payment";
// import { RouterContext } from 'react-router-dom';


class Booking extends Component
{
    getNumberOfDays(startDate, endDate) {
        const start = new Date(startDate).getTime();
        const end = new Date(endDate).getTime();
        const diff = end - start;
        const days = Math.floor(diff / 86400000); // 86400000 milliseconds in a day
        console.log(days);
        return days;
    }
    
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
        const numberOfDays = this.getNumberOfDays(this.state.date, this.state.enddate);
        const cookies = new Cookies();
        cookies.set('data', numberOfDays);
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
        // const today = new Date().toISOString().slice(0, 10);
        // const nextMonth = new Date(today.getMonth() + 1, 1);
        // const nextMonthISO = nextMonth.toISOString().slice(0, 10);

        // Important
        // const numberOfDays = this.getNumberOfDays(this.state.date, this.state.enddate);
        // const cookies = new Cookies();
        // cookies.set('data', numberOfDays);

        // const start = new Date(this.state.date).getTime();
        // const end = new Date(this.state.enddate).getTime();
        // const diff = end - start;
        // const days = Math.floor(diff / 86400000);
        // const cookies = new Cookies();
        // cookies.set('data', days);
        // const x = cookies.get('data');
        // console.log(x);
       

        const today1 = new Date().toISOString().slice(0, 10);
        const today2 = new Date(today1)
        const nextMonth1 = new Date(today2.getTime());
        nextMonth1.setMonth(today2.getMonth()+1, today2.getDate());
        const nextMonthISO1 = nextMonth1.toISOString().slice(0,10);

        const today = new Date();
        const nextMonth = new Date(today.getTime());
        nextMonth.setMonth(today.getMonth() + 1, today.getDate());
        const nextMonthISO = nextMonth.toISOString().slice(0, 10);
       
        
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
                                        <Form.Control type="date" name="date" min={today1} value={this.state.date} onChange={this.changeHandler} placeholder="Date" required='true' />
                                    </Form.Group> 

                                    

                                    <Form.Group className="mb-3">
                                        <Form.Control type="date" name="enddate" min={today1} value={this.state.enddate} onChange={this.changeHandler} placeholder="Endate" required='true'/>
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

          {/* <div>
        <Payment numberOfDays={numberOfDays} />  
        </div>   */}
            </>
        )
    }
}



export default Booking;