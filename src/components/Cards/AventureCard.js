import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AventureCard = ({ image, title, summary, cta }) => {
    return (
        <Col lg={4} md={6}>
            <Card className="card-type-1">
            <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{summary}</Card.Text>
                    <Card.Link href="#">{cta}</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default AventureCard;