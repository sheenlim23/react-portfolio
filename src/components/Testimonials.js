import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";
SwiperCore.use([Pagination]);
const Portfolio = () => {
  return (
    <div className="testimonials">
      <div className="title">
        <h1>Testimonials</h1>
        <small>Client Testimonials</small>
      </div>
      <Swiper
        spaceBetween={100}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="swiper-container"
      >
        <SwiperSlide className="testimonial-person">
          <div className="testimonial-image-name">
            <div className="image">
              <img src="images/testimonials/3.jpg" alt="" />
            </div>
            <div className="name">
              <h3>Jane Doe</h3>
              <small>CEO ABC</small>
            </div>
          </div>
          <div className="testimonial-p">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident ullam nobis quasi voluptates necessitatibus et error
              minima explicabo doloremque quaerat!"
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial-person">
          <div className="testimonial-image-name">
            <div className="image">
              <img src="images/testimonials/4.jpg" alt="" />
            </div>
            <div className="name">
              <h3>Jane Doe</h3>
              <small>CEO ABC</small>
            </div>
          </div>
          <div className="testimonial-p">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident ullam nobis quasi voluptates necessitatibus et error
              minima explicabo doloremque quaerat!"
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial-person">
          <div className="testimonial-image-name">
            <div className="image">
              <img src="images/testimonials/6.jpg" alt="" />
            </div>
            <div className="name">
              <h3>John Doe</h3>
              <small>CEO ABC</small>
            </div>
          </div>
          <div className="testimonial-p">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident ullam nobis quasi voluptates necessitatibus et error
              minima explicabo doloremque quaerat!"
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial-person">
          <div className="testimonial-image-name">
            <div className="image">
              <img src="images/testimonials/21.jpg" alt="" />
            </div>
            <div className="name">
              <h3>Doe Hoe</h3>
              <small>CEO ABC</small>
            </div>
          </div>
          <div className="testimonial-p">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident ullam nobis quasi voluptates necessitatibus et error
              minima explicabo doloremque quaerat!"
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
