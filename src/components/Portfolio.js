import React from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.min.css';

import { PORTFOLIO_DATA } from '../data/portfolio_data'
SwiperCore.use([Navigation, Pagination, Autoplay]);
const Portfolio = () => {
  return (
    <section data-aos="fade-up" data-aos-offset="500" data-aos-easing="ease-in" data-aos-duration="500">
      <div className="portfolio" id="portfolio">
        <div className="title">
          <h1>Portfolio</h1>
          <small>My projects</small>
        </div>

        <Swiper
          autoplay={{ delay: 2000 }}
          spaceBetween={50}
          loop={true}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {

              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            PORTFOLIO_DATA.map((item) => (
              <SwiperSlide className="swiper-slide">
                <div className="swiper-image">
                  <img src={item.img} alt={item.imgAlt} />
                </div>
                <div className="swiper-text">
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <a href={`${item.link}`} target="_blank" className="btn swiper-btn">Visit Live</a>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
