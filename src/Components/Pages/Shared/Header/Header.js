import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
            <Navbar.Brand href="/"><h2>SS-Fantasy</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/home" className='text-white'><b>Home</b></Nav.Link>
                <Nav.Link href="/stocks" className='text-white'><b>Stocks</b></Nav.Link>
                <Nav.Link href="/blogs" className='text-white'><b>Blogs</b></Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="/login" className='text-white'><b>Login</b></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;