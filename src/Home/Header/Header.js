import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import './Header.css'

const Header = () => {

    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar className='header-container' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/home' href="#home">Perfume-stock</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/blog' href="#pricing">Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <Nav.Link as={Link} to='/addItem' href="#inventory">AddItem</Nav.Link>
                                </>
                            }

                            <Nav.Link as={Link} to='/inventory' href="#inventory">Inventory</Nav.Link>
                            {
                                user ? <button onClick={handleSignOut}>SignOut</button> : <Nav.Link href='#login' as={Link} to='/login'>Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;