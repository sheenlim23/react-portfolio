import React from 'react';
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.min.css';
SwiperCore.use([Navigation]);
const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="title">
        <h1>Portfolio</h1>
        <small>My projects</small>
      </div>
      <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
         className="swiper-container">
          <SwiperSlide className="swiper-slide">
              <div className="swiper-image">
                <img src="images/parallax.png" alt="" />
              </div>
              <div className="swiper-text">
                <h2>Unwind Parallax Website</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nostrum doloremque sit expedita illo aliquid dignissimos accusamus in, magnam eaque.</p>
                <Link className="btn swiper-btn">Visit Live</Link>
              </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
              <div className="swiper-image">
                <img src="images/parallax.png" alt="" />
              </div>
              <div className="swiper-text">
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nostrum doloremque sit expedita illo aliquid dignissimos accusamus in, magnam eaque.</p>
                <Link className="btn swiper-btn">Visit Live</Link>
              </div>
          </SwiperSlide> <SwiperSlide className="swiper-slide">
              <div className="swiper-image">
                <img src="images/parallax.png" alt="" />
              </div>
              <div className="swiper-text">
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nostrum doloremque sit expedita illo aliquid dignissimos accusamus in, magnam eaque.</p>
                <Link className="btn swiper-btn">Visit Live</Link>
              </div>
          </SwiperSlide> <SwiperSlide className="swiper-slide">
              <div className="swiper-image">
                <img src="images/parallax.png" alt="" />
              </div>
              <div className="swiper-text">
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nostrum doloremque sit expedita illo aliquid dignissimos accusamus in, magnam eaque.</p>
                <Link className="btn swiper-btn">Visit Live</Link>
              </div>
          </SwiperSlide>
          ...
      </Swiper>
    </div>
  );
};

export default Portfolio;