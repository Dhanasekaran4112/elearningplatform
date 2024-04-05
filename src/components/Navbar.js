import React from "react";
import Nav from 'react-bootstrap/Nav';
import '../App.css';

function NavBar() {
    return (
    <div className='navbar'>
    <Nav defaultActiveKey="" as="ul">
        <Nav.Item as="li">
            <Nav.Link href="/addfiles"><div className="nav">AddFiles</div></Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link href="/showfiles"><div className="nav">ShowFiles</div></Nav.Link>
        </Nav.Item>
    </Nav>
    </div>
    );
}

export default NavBar;
