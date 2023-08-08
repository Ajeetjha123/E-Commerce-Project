import React from 'react';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import youtubeLogo from './youtube-logo.png'; 
import spotifyLogo from './spotify-icon.png'; 
import facebookLogo from './Facebook_icon.svg.png'; 

const imageStyle = {
  width: '30px',
  height: '30px',
};

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          The Generic
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="footer-nav" />
        <Navbar.Collapse id="footer-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">
              <Image src={youtubeLogo} alt="YouTube" style={imageStyle} />
            </Nav.Link>
            <Nav.Link href="#">
              <Image src={spotifyLogo} alt="Spotify" style={imageStyle} />
            </Nav.Link>
            <Nav.Link href="#">
              <Image src={facebookLogo} alt="Facebook" style={imageStyle} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;
