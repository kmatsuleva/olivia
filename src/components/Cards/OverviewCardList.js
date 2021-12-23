import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import OverviewCard from './OverviewCard';
import './styles.scss';

const OverviewCardList = ({ cardsList }) => {
    return (
        <Row>
            {cardsList.map(
                card => <OverviewCard key={card.id} {...card} />
            )}
        </Row>
    );
}

OverviewCardList.propTypes = {
    cardsList: PropTypes.array
}

export default OverviewCardList;