import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRulerCombined, faBed, faBath, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function PropertyCard({ title, description, location, price, image, status, area, beds, baths, Category }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <Link href="#">
          <Image className="w-full h-64 object-cover" src={image} alt={title} />
        </Link>
        {/* Status Badge */}
        <div
            className={`${
              status === 'Booked'
                ? 'bg-red-500'
                : status === 'Unavailable'
                ? 'bg-yellow-500'
                : status === 'Available'
                ? 'bg-green-500'
                : 'bg-yellow-500'
            } text-white rounded absolute top-4 left-4 py-1 px-3`}
        >
          Status: {status}
        </div>

        {/* Category Badge (Half on Image, Half Below) */}
        <div className="bg-white text-primary absolute rounded left-4 py-3 px-3" style={{ bottom: '-20px' }}>
          {Category}
        </div>
      </div>

      {/* Property Body */}
      <div className="p-4 pt-8"> {/* Add padding-top to avoid overlap with Category badge */}
        <h1 className="text-primary font-bold h4 text-lg mb-3">₦{price.toLocaleString()}</h1>
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mr-2" style={{ height : '20px' }} />
          <p>{location}</p>
        </div>
        <Link className="block h4 font-medium mb-2 text-gray-700 text-2xl" href="#">
          {title}
        </Link>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Property Details (Area, Beds, Baths) */}
      <div className="flex border-t">
        <small className="flex-1 flex items-center justify-center py-2 border-r">
          <FontAwesomeIcon icon={faRulerCombined} className="text-primary mr-2" style={{ height : '20px' }} />
          {area} Sqft
        </small>
        <small className="flex-1 flex items-center justify-center py-2 border-r">
          <FontAwesomeIcon icon={faBed} className="text-primary mr-2" style={{ height : '20px' }} />
          {beds} Beds
        </small>
        <small className="flex-1 flex items-center justify-center py-2">
          <FontAwesomeIcon icon={faBath} className="text-primary mr-2" style={{ height : '20px' }} />
          {baths} Baths
        </small>
      </div>
    </div>
  );
}
