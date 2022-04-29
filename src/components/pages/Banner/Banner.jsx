import React from "react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay  } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/autoplay';


const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: false }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <img
          className="lg:h-[33rem] md:h-72 sm:h-60 w-full"
          src="https://i.ibb.co/rcXxJFJ/fruit7.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="lg:h-[33rem] md:h-72 sm:h-60 w-full"
          src="https://i.ibb.co/7R3rcPX/fruit2.jpg"
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          className="lg:h-[33rem] md:h-72 sm:h-60 w-full"
          src={"https://i.ibb.co/18C2h48/fruit3.jpg"}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="lg:h-[33rem] md:h-72 sm:h-60 w-full"
          src="https://i.ibb.co/svMBZ1H/fruit4.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="lg:h-[33rem] md:h-72 sm:h-60 w-full"
          src="https://i.ibb.co/Z8mwjw6/fruit5.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="lg:h-[33rem] md:h-72 sm:h-60 w-full"
          src="https://i.ibb.co/Km5bbMr/fruit9.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
