import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Message from '../files/Message';
import { validPassword } from '../files/Regex';
import { signup } from '../files/userActions';
import { Provider,useDispatch, useSelector } from 'react-redux';

function Signup() {
    const navigate = useNavigate();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();
    const location = useLocation();

    const redirect = location.search ? location.search.split("=")[1] : "/showfiles";

    const { error, loading, userInfo } = useSelector((state) => state.userSignup); // Destructure state properly

    useEffect(() => {
        if (userInfo) {
            navigate("/signin");
        }
    }, [userInfo, navigate, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();

        if (pass1 !== pass2) {
            setMessage("Passwords Do not Match");
            navigate("/signup");
        } else if (!validPassword.test(pass1)) {
            setMessage("Invalid Password");
        } else {
            dispatch(signup(fname, lname, email, pass1));
            setMessage("Register Success");
            navigate("/login");
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
                            {message && <Message variant='danger'>{error}</Message>}
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
 // Export the wrapped component
export default Signup;
