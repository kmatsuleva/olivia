import React from 'react';
import { Row, Col } from 'react-bootstrap';

import "swiper/css";
import "swiper/css/navigation"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

SwiperCore.use([Autoplay, Navigation]);

const Testimonials = () => {
  return (
    <Row>
      <Col md={6}>
        <Swiper
          spaceBetween={50}
          navigation={true}
          autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Col>
    </Row>
  );
};

export default Testimonials;