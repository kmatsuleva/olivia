import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Card, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const OverviewCard = ({ id, image, title, summary, cta }) => {
  return (
    <Col xl={4} lg={6} md={8}>
      <Card className="icon-card">
        <div
          className="icon-card__img"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <Card.Body className="pb-5 mt-3">
          <Card.Title as="h3">{title}</Card.Title>
          <Card.Text className="mb-4 pb-3">{summary}</Card.Text>
          <LinkContainer to={`/aventures/${id}`}>
            <Button variant="secondary" size="md">
              {cta}
            </Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </Col>
  );
};

OverviewCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  cta: PropTypes.string
};

export default OverviewCard;
