import React from 'react';
import Image from 'next/image'

const ReviewItem = ({ text, image, name, role }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-6 m-4 max-w-sm w-50">
      <div className="bg-white p-1 rounded-lg border">
        <p className="text-gray-700 mb-4">{text}</p>
        <div className="flex items-center">
          <img className="w-12 h-12 rounded-full object-cover" src={image} alt={name} />
          <div className="ml-3">
            <h6 className="font-bold text-lg">{name}</h6>
            <small className="text-gray-500">{role}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
