import React from 'react'
import Container from 'react-bootstrap/Container';
import { Nav, NavbarBrand } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import OverLay from './Overlay';
import styles from './Navbar.module.css'
import Image from 'next/image';
export default function NavbarScroll() {
  return (
    <>

      {['sm'].map((expand) => (
        <Navbar key={expand} bg="white" expand={expand} className="mb-3">

          <Container fluid className={styles.main}>

            <Navbar.Brand href="#"><Image src="/logo.png" height="50" width="120" alt=""></Image></Navbar.Brand>
            <div className={styles.topnav}>
              <Image className={styles.img} src="/cart.svg" width="30" height="30" alt=""></Image>
              <Image src="/heart.svg" width="30" height="30" alt=""></Image>
            </div>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse>
              <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link href="/Servicing/Servicing"><p className={styles.servicing} >Servicing</p></Nav.Link>
                <Nav.Link href="/Accessories/Accessories"><p className={styles.Accessories}>Accessories</p></Nav.Link>
                <Nav.Link href="/Insurance/Insurance"><p className={styles.servicing}>Insurance</p></Nav.Link>
              </Nav>

              <Button className={styles.quote + ' ' + "mb-3"} variant="light">Get a Quote</Button>
              <NavDropdown className={styles.location + ' ' + "mb-3"}
                title="Location"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">

                  Something else here
                </NavDropdown.Item>
              </NavDropdown>&nbsp;	&nbsp;	&nbsp;

              <Nav.Link className={styles.login + ' ' + "mb-3"} href="#action1">Login</Nav.Link>

              <Nav.Link className={styles.button + ' ' + "mb-3"} href="#action1"><OverLay /> </Nav.Link>
            </Navbar.Collapse>

          </Container>




          <input className={styles.search + ' ' + "form-control mr-sm-2"} type="search" placeholder="Search" aria-label="Search" />
          <button className={styles.button2 + ' ' + "btn btn-outline-success my-2 my-sm-0"} type="submit">Search</button>

        </Navbar>
      ))}
    </>
  );
}
