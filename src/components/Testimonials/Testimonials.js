import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import "swiper/css";
import "swiper/css/navigation"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

SwiperCore.use([Autoplay, Navigation]);

const Testimonials = ({ testimonials }) => {
  return (
    <Row>
      <Col md={6}>
        <Swiper
          spaceBetween={50}
          navigation={true}
          autoplay={{ "delay": 2500, "disableOnInteraction": false }}
          loop={true}
        >
          {testimonials.map(testimonial =>
            <SwiperSlide key={testimonial.id}>
              <blockquote className="blockquote">
                <p className="mb-0">{testimonial.quote}</p>
                <footer className="blockquote-footer">
                  <cite>{testimonial.author}</cite>
                </footer>
              </blockquote>
            </SwiperSlide>
          )}
        </Swiper>
      </Col>
    </Row>
  );
};

Testimonials.propTypes = {
  cardsList: PropTypes.array
}

export default Testimonials;