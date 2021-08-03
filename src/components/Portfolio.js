import React from 'react';
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation,Pagination} from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.min.css';
SwiperCore.use([Navigation,Pagination]);
const Portfolio = () => {
  return (
    <section>
      <div className="portfolio" id="portfolio">
        <div className="title">
          <h1>Portfolio</h1>
          <small>My projects</small>
        </div>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          className="swiper-container">
            <SwiperSlide className="swiper-slide">
                <div className="swiper-image">
                  <img src="images/posadmin.png" alt="" />
                </div>
                <div className="swiper-text">
                  <div>
                    <h2>POS Admin</h2>
                    <p>POS Admin is a Web application intended for small store/business that wants to track their income. The POS Admin can track your daily, weekly, and yearly income and be able to store them in the database or print them for reports, or store data manually. </p>
                    <a href="http://posadmin.epizy.com/" target="_blank" className="btn swiper-btn">Visit Live</a>
                  </div>
                </div>
            </SwiperSlide> 
            <SwiperSlide className="swiper-slide">
                <div className="swiper-image">
                  <img src="images/parallax.png" alt="" />
                </div>
                <div className="swiper-text">
                  <div>
                    <h2>Unwind Parallax Website</h2>
                    <p>Unwind Parallax Website is a simple parallax website design. Made with the use HTML, SASS/CSS, JavaScript, GSAP, and SwiperJs. This Website show the beautiful spots of Southern Leyte. </p>
                    <a className="btn swiper-btn" href="https://slparallax.netlify.app/" target="_blank">Visit Live</a>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="swiper-image">
                  <img src="images/sunnyside.png" alt="" />
                </div>
                <div className="swiper-text">
                  <div>
                    <h2>Sunnyside Agency</h2>
                    <p>Sunnyside is powered by React Js, Sunnyside website taken from frontendmentor website, which is a free front-end mentor. Sunnyside is built with React JS. React JS is a free and open front-end open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by facebook and a community of individual developers and companies.</p>
                    <a href="http://sunnysidereact.netlify.app/"  target="_blank" className="btn swiper-btn">Visit Live</a>
                  </div>
                </div>
            </SwiperSlide> 
            ...
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;