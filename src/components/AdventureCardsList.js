import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import AdventureCard from './AdventureCard';

const AdventureCardsList = ({ cardsList }) => {
    return (
        <Row>
            {cardsList.map(
                card => <AdventureCard key={card.id} {...card} />
            )}
        </Row>
    );
}

AdventureCardsList.propTypes = {
    cardsList: PropTypes.array
}

export default AdventureCardsList;