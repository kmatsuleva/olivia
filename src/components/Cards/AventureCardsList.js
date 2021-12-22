import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import AventureCard from './AventureCard';

const AventureCardsList = ({ cardsList }) => {
    return (
        <Row>
            {cardsList.map(
                card => <AventureCard key={card.id} {...card} />
            )}
        </Row>
    );
}

AventureCardsList.propTypes = {
    cardsList: PropTypes.array
}

export default AventureCardsList;