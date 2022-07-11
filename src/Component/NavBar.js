import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

function NavBar(props) {
    // console.log(props,"next button func")
    return (
        <Navbar bg="dark" variant='dark' expand="md" fixed='bottom' >
            <Container>
                <Navbar.Brand href="/">
                    <img 
                        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
                        alt="PokéAPI logo" 
                        width="75px"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>                    
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <Button variant="success" onClick={(e) => props.index(props.next)} >Next</Button>
                    <Button variant="success" onClick={(e) => props.index(props.previous)}>Previous</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar
