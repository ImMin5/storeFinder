import React from 'react';
import {Navbar, Nav,NavDropdown, Container} from 'react-bootstrap'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faA } from "@fortawesome/free-solid-svg-icons";


function NavbarTop (){
	const NavbarStyle ={
		padding :"0",
	}
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="/">ATable</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
		         <Nav.Link href="/login">로그인</Nav.Link>
		        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
		          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
		          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
		          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
		          <NavDropdown.Divider />
		          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
		        </NavDropdown>
		        </Nav>
		        </Navbar.Collapse>
		        
		   
	        </Container>
	     </Navbar>

		)
}

export default NavbarTop;