import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Actevity} from './../Actevity/Actevity';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Sliderrr.css";

// import required modules
import { Pagination } from "swiper";



const Sliderrr = () => {

  return (
    <>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={20}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div> <Actevity /> </div></SwiperSlide>
        <SwiperSlide><div> <Actevity /> </div></SwiperSlide>
        <SwiperSlide><div> <Actevity /> </div></SwiperSlide>
      </Swiper>
    </>
  );
}

export {Sliderrr};
