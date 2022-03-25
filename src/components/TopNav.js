import React from 'react';
import { Navbar, Button, Nav, Container, NavDropdown } from 'react-bootstrap';

export default function TopNav() {
    return(
        <Navbar bg="light" expand="lg" fixed='top'>
            <Container>
                <Navbar.Brand href="#">JMeyer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto justify-content-around" style={{ width: "100%" }}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <NavDropdown title="Experience" id="basic-nav-dropdown" href="#experience">
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                        </NavDropdown>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}