import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './BannerCard.css';

// Import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div className="my-10 mx-auto max-w-3xl"> {/* Optional: Limit the width */}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 30,  // Reduced rotation for a tighter effect
          stretch: 0,
          depth: 50,   // Reduced depth for a more compact look
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }} // Pagination is clickable
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1707105762i/207567626.jpg" alt="Book 1" className="object-contain w-64 h-40 rounded-lg shadow-md" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1718819488i/207298822.jpg" alt="Book 2" className="object-contain w-64 h-40 rounded-lg shadow-md" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1710378426i/209499400.jpg" alt="Book 3" className="object-contain w-64 h-40 rounded-lg shadow-md" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1662440397i/61111247.jpg" alt="Book 4" className="object-contain w-64 h-40 rounded-lg shadow-md" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1708785240i/204640542.jpg" alt="Book 5" className="object-contain w-64 h-40 rounded-lg shadow-md" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCard;
