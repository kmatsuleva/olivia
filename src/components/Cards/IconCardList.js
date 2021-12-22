import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import IconCard from './IconCard';
import './styles.scss';

const IconCardList = ({ cardsList }) => {
    return (
        <Row>
            {cardsList.map(
                card => <IconCard key={card.id} {...card} />
            )}
        </Row>
    );
}

IconCardList.propTypes = {
    cardsList: PropTypes.array
}

export default IconCardList;