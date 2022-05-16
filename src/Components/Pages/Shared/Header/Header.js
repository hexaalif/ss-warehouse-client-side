import React from 'react';
import logo from '../../../../Images/cargoLogo.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../../../firebase.init"

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to="/">
            <img
            alt=""
            src={logo}
            height='40'
            width='40'
            className="d-inline-block align-center"
            />{' '}
            <span className='fs-3 fw-bold'>SS-WAREHOUSE</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/home" className='text-white'><b>Home</b></Nav.Link>
                <Nav.Link as={Link} to="/stocks" className='text-white'><b>Stocks</b></Nav.Link>
                <Nav.Link as={Link} to="/blogs" className='text-white'><b>Blogs</b></Nav.Link>
                </Nav>
                <Nav>
                    {
                        user ? <button as={Link} to="/login" className='text-white btn btn-info'><b>Login</b></button> : <button as={Link} to="/signout" className='text-white btn btn-warning'><b>Login</b></button>
                    }
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;