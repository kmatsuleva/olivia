import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children, subheading, heading, isFullWidth, isCentered }) => {
    // todo: refactor - what if props has value undefined ? 
    // it's when prop is not passed in the parent component 
    // currently, we are entering 'false' code block
    return (
        <section className={`py-5 ${(isCentered ? "text-center" : "")}`}>
            <div className={isFullWidth ? "container-fluid" : "container"}>
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