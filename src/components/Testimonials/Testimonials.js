import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

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
          centered={true}
          navigation={true}
          pagination={{
            "dynamicBullets": true
          }}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
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