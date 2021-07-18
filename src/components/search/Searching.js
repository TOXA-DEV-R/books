import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import sliderImages from "../../assets/images/slider_images.png";

SwiperCore.use([Pagination, Autoplay]);

const Searching = () => {
  <img src={sliderImages} alt="img" />;
  return (
    <div className="searching">
      <div className="container">
        <Swiper
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="swiper-slide"
        >
          <SwiperSlide>
            <h2 className="swiper-slide__title">Temuriylar davri adabiyoti</h2>
          </SwiperSlide>
          <SwiperSlide>
            <h2 className="swiper-slide__title">Temuriylar davri adabiyoti</h2>
          </SwiperSlide>
          <SwiperSlide>
            <h2 className="swiper-slide__title">Temuriylar davri adabiyoti</h2>
          </SwiperSlide>
          <SwiperSlide>
            <h2 className="swiper-slide__title">Temuriylar davri adabiyoti</h2>
          </SwiperSlide>
        </Swiper>
        <div className="searching__column">
          <div className="searching__column-title">Qidirish</div>
          <div className="searching__column-inputs">
            <input
              type="text"
              placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
            />
            <button>
              <i className="ic ic_search"></i> Izlash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searching;
