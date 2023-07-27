import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/NavBarComp.css';
import logoImage from '../Images/namelogo.png';

function NavBarComp() {
  return (
    <>
      <Navbar className="custom-navbar" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className = "me-auto">
          <img className = "img-logo" src={logoImage} alt='Logo'/>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComp;