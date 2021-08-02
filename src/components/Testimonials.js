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
    <section>
      <div className="testimonials">
        <div className="title">
          <h1>Testimonials</h1>
          <small>Client Testimonials</small>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          // pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="swiper-container"
        >
          <SwiperSlide className="testimonial-person">
              <div className="image">
                <img src="images/testimonials/4.jpg" alt="" />
              </div>
            <div className="testimonial-p">
              <div>
                <h3>Jane Doe</h3>
                <small>CEO ABC</small>
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ullam nobis quasi voluptates necessitatibus et error
                  minima explicabo doloremque quaerat!"
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial-person">
              <div className="image">
                <img src="images/testimonials/4.jpg" alt="" />
              </div>
            <div className="testimonial-p">
              <div>
                <h3>Jane Doe</h3>
                <small>CEO ABC</small>
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ullam nobis quasi voluptates necessitatibus et error
                  minima explicabo doloremque quaerat!"
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial-person">
              <div className="image">
                <img src="images/testimonials/4.jpg" alt="" />
              </div>
            <div className="testimonial-p">
              <div className="div">
                <h3>Jane Doe</h3>
                <small>CEO ABC</small>
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ullam nobis quasi voluptates necessitatibus et error
                  minima explicabo doloremque quaerat!"
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial-person">
              <div className="image">
                <img src="images/testimonials/4.jpg" alt="" />
              </div>
            <div className="testimonial-p">
              <div>
                <h3>Jane Doe</h3>
                <small>CEO ABC</small>
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ullam nobis quasi voluptates necessitatibus et error
                  minima explicabo doloremque quaerat!"
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
