import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import useFirebase from '../../Hooks/useFirebase';

const Navbars = () => {
    const { user, logOut } = useFirebase()
    return (


        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container >

                    <Navbar.Brand to="#home"> <span className="text-info fs-3">Ali Motor Bike</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                        <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>


                    </Navbar.Collapse>
                    {user?.email ?
                        <>
                            <NavLink style={{ textDecoration: "none" }} to="/dashboards">Dashboard</NavLink>
                            <Button onClick={logOut} className="btn-banner" color="inherit">Logout</Button>
                        </>
                        :
                        <NavLink to="/login">
                            <Button className="btn-banner" color="inherit">Login</Button>
                        </NavLink>

                    }
                </Container>
            </Navbar>
        </>

    );
};

export default Navbars;