
import {Container, Navbar, NavDropdown, Nav} from 'react-bootstrap'
export const Header  = ()=>{
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href='/'>
                DESDE LA BETA
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#">Lo ultimo</Nav.Link>
              
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}