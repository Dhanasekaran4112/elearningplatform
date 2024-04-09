import React from "react";
import Nav from 'react-bootstrap/Nav';
// import '../App.css';

function NavBar() {
    return (
    <div className='navbar'>
        <h1 className='head'>E LEARNERS</h1>

    <Nav defaultActiveKey="" as="ul" >
        
        <Nav.Item as="li">
            <Nav.Link href="/showfiles"><div className="nav-s">Courses</div></Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link href="/filedetailcourse"><div className="nav-a">My Courses</div></Nav.Link>
        </Nav.Item>
    </Nav>
    </div>
    );
}

export default NavBar;
