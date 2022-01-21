import React from "react";
import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header py-5">
      <Container fluid>
        <Row className="align-items-center justify-content-around">
          <Col lg="3" className="d-flex justify-content-lg-start">
            Social icons
          </Col>
          <Col lg="3" className="d-flex justify-content-lg-center">
            <img src="/logo.png" alt="" />
          </Col>
          <Col lg="3" className="d-flex justify-content-lg-end">
            <LinkContainer to="/contact">
              <Button variant="outline-dark" size="sm">
                Work with me
              </Button>
            </LinkContainer>
          </Col>
        </Row>

        <Row className="justify-content-around">
          <Navbar expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="main-navigation" />
              <Navbar.Collapse id="main-navigation">
                <Nav>
                  <LinkContainer to="/">
                    <Nav.Link className="px-2">Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/item-2">
                    <Nav.Link className="px-2">Item 2</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/item-3">
                    <Nav.Link className="px-2">Item 3</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contact">
                    <Nav.Link className="px-2">Contact</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
