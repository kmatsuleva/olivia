import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import './styles.scss';

const Header = () => {
    return (
        <header className="header py-5">
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                        <Link to={`/contact`}>
                            <Button variant="outline-dark" size="sm">Work with me</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;