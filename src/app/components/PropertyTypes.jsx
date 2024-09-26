"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const PropertyTypes = () => {
  const [preference, setPreference] = useState('');

  const properties = [
    {
      name: "Luxury GRA",
      location: "Lagos, Ikeja Waikiki Properties",
      icon: "/img/icon-apartment.png",
      delay: "100",
      link: "Luxury GRA", // Example link
      
    },
    {
      name: "House X",
      location: "Abuja, Waikiki Properties",
      icon: "/img/icon-villa.png",
      delay: "300",
      link: "/house-x",
    },
    {
      name: "Royal Benin",
      location: "Benin, Waikiki Properties",
      icon: "/img/icon-house.png",
      delay: "500",
      link: "/royal-benin",
    },
    {
      name: "Enugu Hillside",
      location: "Enugu, Waikiki Properties",
      icon: "/img/icon-housing.png",
      delay: "700",
      link: "/enugu-hillside",
    },
    {
      name: "Canadian Log Cabin",
      location: "Canada, Waikiki Properties",
      icon: "/img/icon-building.png",
      delay: "100",
      link: "/canadian-log-cabin",
    },
    {
      name: "Provincial French",
      location: "France, Waikiki Properties",
      icon: "/img/icon-neighborhood.png",
      delay: "300",
      link: "/provincial-french",
    },
    {
      name: "American Victorian",
      location: "USA, Waikiki Properties",
      icon: "/img/icon-condominium.png",
      delay: "500",
      link: "/american-victorian",
    },
    {
      name: "English Country",
      location: "UK, Waikiki Properties",
      icon: "/img/icon-luxury.png",
      delay: "700",
      link: "/english-country",
    },
  ];
  
  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">Property Types</h1>
        <p>
          <span className="text-primary">Nigeria and Global Inspired</span> Explore our diverse range of Guest Houses, from luxurious villas to modern apartments, designed to suit every lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property, index) => (
        <Link
        href={`/search?preference=${encodeURIComponent(preference)}${property.name}`}
        >

          <div
          key={index}
          value={preference}
          onChange={(e) => setPreference(e.target.value)}
          href={property.link}
          className={`bg-white shadow-lg rounded-lg p-4 text-center transform transition duration-500 hover:scale-105 hover:bg-gray-100`}
          data-wow-delay={`${property.delay}ms`}
          >
            <Image
              src={property.icon}
              alt={property.name}
              className="w-16 h-16 mx-auto mb-4"
              />
            <h6 className="text-lg font-semibold">{property.name}</h6>
            <p className="text-sm text-gray-500">
              <i className="fas fa-map-marker-alt text-primary mr-2"></i>
              {property.location}
            </p>
          </div>
      </Link>
        ))}
      </div>
    </div>
  );
};

export default PropertyTypes;
