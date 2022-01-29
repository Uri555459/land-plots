import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./gallery.scss";

export const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2 className="section-title section-title--dark">Галлерея</h2>
      </div>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={window.innerWidth > 991 ? 2 : 1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src="images/slide-1.jpg" alt="slide-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/slide-2.jpg" alt="slide-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/slide-3.jpg" alt="slide-3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/slide-4.jpg" alt="slide-4" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
