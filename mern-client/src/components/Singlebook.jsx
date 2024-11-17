import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { Banner } from 'flowbite-react';
import { HiX } from 'react-icons/hi';
import { MdAnnouncement } from 'react-icons/md';

const SingleBook = () => {
  const data = useLoaderData(); // Load book data
  const { bookTitle, authorName, imageURL, category, bookDescription, bookCondition } = data;

  return (
    <div className='mt-20'>
      {/* Banner with Book Title */}
      <Banner>
        <div className="z-50 flex justify-between w-full py-12 px-4 border-b border-gray-200 bg-amber-400">
          <div className="flex items-center mx-auto">
            <p className="flex items-center text-2xl font-normal text-black">
              <MdAnnouncement className='me-2 text-red-600' />
              <span className='text-4xl font-semibold'>Book Name: {bookTitle}</span>
            </p>
          </div>
          <Banner.CollapseButton color="gray" className="border-0 bg-transparent px-0">
            <HiX className="h-4 w-4" />
          </Banner.CollapseButton>
        </div>
      </Banner>

      {/* Book Details */}
      <div className="p-8">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold">Author: {authorName}</h2>
          <p className="mt-4 text-lg">{bookDescription}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl">Category: {category}</h3>
          <p className="mt-4">Condition: {bookCondition}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl">Book Image</h3>
          {imageURL && <img src={imageURL} alt={bookTitle} className="w-full mt-4" />}
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
