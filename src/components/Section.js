import React from 'react';
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types';

const Section = ({ children, subheading, heading, isCentered }) => {
    return (
        <section className={isCentered ? "text-center" : ""}>
            {
                subheading ? (
                    <span>{subheading}</span>
                ) : ""
            }
            {
                heading ? (
                    <h2>{heading}</h2>
                ) : ""
            }
            <Container>
                {children}
            </Container>
        </section >
    );
}

Section.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    subheading: PropTypes.string,
    heading: PropTypes.string,
    isCentered: PropTypes.bool.isRequired
}

export default Section;