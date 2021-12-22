import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CardWithIcon = ({ image, title, summary, cta }) => {
    return (
        <Col lg={4} md={6}>
            <Card className="icon-card">
                <div className="icon-card__img"
                    style={{ backgroundImage: `url(${image})` }}
                 ></div>
                <Card.Body className="pt-5">
                    <Card.Title as="h3">{title}</Card.Title>
                    <Card.Text>{summary}</Card.Text>
                    <Card.Link href="#">{cta}</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CardWithIcon;