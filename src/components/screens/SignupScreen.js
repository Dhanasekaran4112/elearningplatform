import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Message from '../files/Message';
import { validPassword } from '../files/Regex';

// Example implementation of signup function
const signup = (fname, lname, email, password) => {
    return new Promise((resolve, reject) => {
        fetch('http://127.0.0.1:8000/authapi/users/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fname, lname, email, password })
        })
        .then(response => {
            if (response.ok) {
                resolve(); // Resolve the Promise if the request is successful
            } else {
                reject(new Error('Signup failed')); // Reject the Promise with an error if the request fails
            }
        })
        .catch(error => {
            reject(error); // Reject the Promise if an error occurs during the request
        });
    });
};

function Signup() {
    const navigate = useNavigate();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    const [message, setMessage] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        if (pass1 !== pass2) {
            setMessage("Passwords Do not Match");
        } else if (!validPassword.test(pass1)) {
            setMessage("Invalid Password");
        } else {
            signup(fname, lname, email, pass1)
                .then(() => {
                    setMessage("Register Success");
                    navigate("/signin");
                })
                .catch(error => {
                    setMessage("An error occurred while signing up. Please try again.");
                });
        }
    };

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}></Col>
                <Col md={4}>
                    <Card>
                        <Card.Header as="h3" className='text-center bg-black text-light'>Signup</Card.Header>
                        <Card.Body>
                            {message && <Message variant='danger'>{message}</Message>}
                            <Form onSubmit={submitHandler}>
                                <Form.Group className="mb-3" controlId="fname">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter a First Name" value={fname} onChange={(e) => setFname(e.target.value)} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="lname">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter a Last Name" value={lname} onChange={(e) => setLname(e.target.value)} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter a Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="pass1">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter your Password" value={pass1} onChange={(e) => setPass1(e.target.value)} required />
                                </Form.Group>
                                <small>Password must include at least 8 characters with at least one number, lowercase, uppercase, and symbol</small>
                                <Form.Group className="mb-3" controlId="pass2">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Password" value={pass2} onChange={(e) => setPass2(e.target.value)} required />
                                </Form.Group>
                                <br />
                                <div className='d-grid gap-2'>
                                    <Button className='btn btn-md btn-success ' type="submit">Signup</Button>
                                </div>
                            </Form>
                            <Row className='py-3'>
                                <Col>Already User?
                                    <Link to="/signin">Login</Link>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}></Col>
            </Row>
        </Container>
    );
}

export default Signup;
