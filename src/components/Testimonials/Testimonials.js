import React from 'react';
import { Row, Col } from 'react-bootstrap';

import 'swiper/swiper.scss';
import 'swiper/modules/autoplay/autoplay.scss';
import 'swiper/modules/navigation/navigation.scss';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { Autoplay, Navigation } from "swiper";
SwiperCore.use([Autoplay, Navigation]);

const Testimonials = () => {
  return (
    <Row>
      <Col md={6}>
        <Swiper
          autoplay={{
            "delay": 5000,
            "disableOnInteraction": false
          }}
          navigation={true}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <blockquote className="blockquote">
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer"> <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </SwiperSlide>
          <SwiperSlide>
            <blockquote className="blockquote">
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer"> <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </SwiperSlide>
          <SwiperSlide>
            <blockquote className="blockquote">
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer"> <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </SwiperSlide>
        </Swiper>
      </Col>
    </Row>

  );
};

export default Testimonials;