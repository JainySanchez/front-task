import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/NavBarComp.css';
import logoImage from '../Images/namelogo.png';
import React, { useEffect, useState } from 'react';

function NavBarComp() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClassName = isScrolled ? "custom-navbar fixed-navbar" : "custom-navbar";

  return (
    <>
       <Navbar className={navbarClassName} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="me-auto">
            <img className="img-logo" src={logoImage} alt='Logo' />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComp;