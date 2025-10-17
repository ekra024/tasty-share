import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BannerTitle from "./BannerTitle";

const Banner = () => {
  return (
    <div className="h-screen">
      <Swiper
      className="h-max bg-[rgba(0,0,0,0.5)]"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div>
          <img src="/Slide1.avif"
            className="w-full mx-auto h-[530px] relative"
            alt=""
          />
          <BannerTitle/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            className="w-full mx-auto h-[530px] absolute"
            src="/Image17.avif"
            alt=""
          />
          <BannerTitle />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            className="w-full mx-auto h-[530px] absolute"
            src="/Slide2.avif"
            alt=""
          />
          <BannerTitle />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            className="w-full mx-auto h-[530px] relative"
            src="/Slide3.avif"
            alt=""
          />
          <BannerTitle />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
          <img
            className="w-full mx-auto h-[530px] relative"
            src="/Image1.webp"
            alt=""
          />
          <BannerTitle />
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Banner;
