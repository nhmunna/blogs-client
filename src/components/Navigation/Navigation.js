import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container className="nav">
                    <Navbar.Brand href="#home" className="text-success">My Blogs</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>

                        {user?.email ?
                            <>
                                <Nav.Link as={Link} to="/write">Write</Nav.Link>
                                <Nav.Link as={Link} to="/myblogs">My Blogs</Nav.Link>
                                <Nav.Link as={Link} to="/userInfo">
                                    Signed in as: {user?.displayName}
                                </Nav.Link>
                                <Button onClick={logOut} variant="light">Logout</Button>
                            </> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;