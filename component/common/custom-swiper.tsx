"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./custom-swiper.css";

interface SwiperArray {
  id: number;
  name: string;
  url: string;
}

export default function CustomSwiper({ arr }: { arr: SwiperArray[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center py-4 md:py-8">
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {arr.map((v, i) => (
          <SwiperSlide key={i}>
            <button type="button" className="slide-button">
              {v.name}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
