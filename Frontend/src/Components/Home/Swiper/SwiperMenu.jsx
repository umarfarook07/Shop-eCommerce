
// SwiperMenu.jsx

import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import Banner1 from './images/cover-banner1.jpg';
import Banner3 from './images/cover-banner3.jpg';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

import SaleComponent from './SaleComponent';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function SwiperMenu() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Banner1} alt="Cover-Banner" />
          <div className="sale-div">
          <SaleComponent cat = "Men's" />
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <img src={Banner3} alt="Cover-Banner" />
          <div className="sale-div"> 
          <SaleComponent cat = "Women's" />
          </div>
          </SwiperSlide>
      </Swiper>
    </>
  );
}
