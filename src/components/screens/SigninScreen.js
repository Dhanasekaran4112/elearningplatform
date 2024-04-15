import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Message from '../files/Message';
import { validEmail, validPassword } from '../files/Regex';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate email format
        if (!validEmail.test(email)) {
            setError("Invalid email address");
            return;
        }

        // Validate password format
        if (!validPassword.test(password)) {
            setError("Invalid password");
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/authapi/users/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            navigate('/showfiles');
        } catch (error) {
            setError(error.message || 'An error occurred. Please try again later.');
        }
    };

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}></Col>
                <Col md={4}>
                    <Card>
                        <Card.Header as="h3" className='text-center bg-black text-light'>Login</Card.Header>
                        <Card.Body>
                            {error && <Message variant='danger'>{error}</Message>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </Form.Group>
                                <div className='d-grid gap-2'>
                                    <Button className='btn btn-md btn-success' type="submit">Login</Button>
                                </div>
                            </Form>
                            <Row className='py-3'>
                                <Col>New User? <Link to="/signup">Signup</Link></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}></Col>
            </Row>
        </Container>
    );
}

export default Login;
