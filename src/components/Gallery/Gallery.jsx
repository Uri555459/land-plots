// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./gallery.scss";

export const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        <h2 className="section-title section-title--dark">Галлерея</h2>
      </div>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src="images/slide-1" alt="slide-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/slide-2" alt="slide-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/slide-3" alt="slide-3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/slide-4" alt="slide-4" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
