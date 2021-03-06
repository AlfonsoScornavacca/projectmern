import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import useAuth from '../auth/useAuth'
export default function Navegation() {
    const {logout} = useAuth();
    return (
        <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark'>
            <Navbar.Brand>
                Task Manager
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to='/projects'>Projects</Nav.Link>
                    <NavDropdown title='Admin'>
                    <NavDropdown.Item as={NavLink} to='/admins/users'>Users</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav >
                    <Nav.Link as={NavLink} to='/login'>Log In</Nav.Link>
                    <Nav.Link as={NavLink} to='/register'>Register</Nav.Link>
                    <Nav.Link as={NavLink} to='/account'>Account</Nav.Link>
                    <Nav.Link onClick={() => logout()} to='/'>Log Out</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}
