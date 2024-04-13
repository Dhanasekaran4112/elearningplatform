import React, { useState, useEffect } from 'react';
import { container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Message from '../files/Message';
import {validEmail, validPassword} from '../files/Regex';

function Login() {
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [pass1,setPass1]=useState("")
    const [error,setError]=useState("")

    const submitHandler=(e)=>{
        e.preventDefault() 
    }


    return (
        <>
            <container className='mt-3'>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <Card>
                            <Card.Header as="h3" className='text-center bg-black text-light'>Login</Card.Header>
                            <Card.Body>
                                {error &&<Message variant='danger'>{error}</Message>}
                                <Form onSubmit={submitHandler}>
                                    
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter a Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />


                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="pass1">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter your Password" value={pass1} onChange={(e)=>setPass1(e.target.value)} required />


                                    </Form.Group>
                                    
                                    

                                    <br />
                                    <div className='d-grid gap-2'>
                                        <Button className='btn btn-md btn-success ' type="submit">Login</Button>
                                    </div>

                                </Form>
                                <Row className='py-3'>
                                    <Col>New User?
                                        <Link to="/signup">Signup</Link>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </container>







        </>

    )
}
export default Login;