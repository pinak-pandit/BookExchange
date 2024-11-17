import React from 'react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import BannerCard from '../home/BannerCard';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-orange-300 via-yellow-100 to-teal-200 flex items-center justify-center h-screen">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* Left side */}
        <div className="md:w-1/2 space-y-8 h-full text-center md:text-left">
          <h2 className="text-5xl font-bold leading-snug text-gray-800">
            The Book Exchange: <span className="text-teal-500">Share Knowledge, and Books</span>
          </h2>
          <p className="md:w-4/5 text-gray-700">
            Welcome to The Book Exchange, a platform where you can share books, knowledge, and resources with a community of book lovers. Whether you're looking to borrow or lend books, you're in the right place!
          </p>
        </div>

        {/* Right side*/}
     <div><BannerCard></BannerCard></div>
      </div>
    </div>
  );
};

export default Banner;
