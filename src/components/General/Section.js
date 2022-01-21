import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

const Section = ({ children, subheading, heading, isFullWidth, isCentered }) => {
    return (
        <section className={`py-5 ${isCentered ? "text-center" : ""}`}>
            <div className={isFullWidth ? "container-fluid" : "container"}>
                { subheading && <div className="subheading text-uppercase">{subheading}</div> }
                { heading && <h2>{heading}</h2> }
                {children}
            </div>
        </section>
    );
}

Section.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    subheading: PropTypes.string,
    heading: PropTypes.string,
    isFullWidth: PropTypes.bool,
    isCentered: PropTypes.bool
}

export default Section;