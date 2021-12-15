import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AdventureCard = ({ title, summary, cta }) => {
    return (
        <Col lg={4} md={6}>
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{summary}</Card.Text>
                    <Card.Link href="#">{cta}</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default AdventureCard;