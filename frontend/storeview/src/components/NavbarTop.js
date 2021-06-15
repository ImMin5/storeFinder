import React ,{ useState }from 'react';
import {Navbar, Nav,NavDropdown, Container} from 'react-bootstrap'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faA } from "@fortawesome/free-solid-svg-icons";


function NavbarTop (item){
	const NavbarStyle ={
		padding :"0",
	}
	if(item.type == "client"){
		return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="/">ATable</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
		         <Nav.Link href="/login">{item.menu1}</Nav.Link>
		         <Nav.Link href="/">{item.menu2}</Nav.Link>
		        </Nav>
		        </Navbar.Collapse>
		        
		   
	        </Container>
	     </Navbar>

		)
	}
	else {
		
}
	}

	

NavbarTop.defaultProps = {
  menu1: '로그인',
 
}

export default NavbarTop;