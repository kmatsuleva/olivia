import React from "react";
import PropTypes from 'prop-types';
import { Card, Col } from "react-bootstrap";

const OverviewCard = ({ image, title, summary, cta }) => {
    return (
        <Col xl={4} lg={6} md={8}>
            <Card className="icon-card">
                <div className="icon-card__img"
                    style={{ backgroundImage: `url(${image})` }}
                >
                </div>
                <Card.Body className="pb-5 mt-3">
                    <Card.Title as="h3">{title}</Card.Title>
                    <Card.Text className="mb-4 pb-3">{summary}</Card.Text>
                    <a href="/" className="btn btn-secondary btn-sm">{cta}</a>
                </Card.Body>
            </Card>
        </Col>
    );
}

OverviewCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string, 
    cta: PropTypes.string
}

export default OverviewCard;
