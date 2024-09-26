import React from 'react';
import PropertyCard from './PropertyCard';
import PropertyTabs from './PropertyTab';
import { properties } from '../data';
import Link from 'next/link';
import BrowseMoreButton from './BrowseMoreButton';

export default function PropertyLists() {
  const cards = properties
    .sort((x, y) => x.price - y.price)
    .map((card, index) => (
      <Link 
        key={index} 
        href={`/properties/${card.title.split(' ').join('-')}`} 
        title={card.title}
      >
        <PropertyCard 
          title={card.title}
          description={card.description}
          location={card.location}
          price={card.price}
          image={card.image}
          status={card.status}
          area={card.area}
          beds={card.beds}
          baths={card.baths}
          Category={card.category}
        />
      </Link>
    ));

  return (
    <div className="container mx-auto py-10">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <div className="text-center lg:text-left mb-5 lg:mb-0 lg:w-1/2 animate-slideInLeft">
          <h1 className="text-3xl font-bold mb-3">Property Listing</h1>
          <p>
            Browse our selection of luxurious guest houses, each offering premium comfort and prime locations.
          </p>
        </div>
        <PropertyTabs />
      </div>

      {/* Grid structure to show the cards in rows of 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards}
      </div>

      {/* Browse More Button */}
      <BrowseMoreButton />

      
    </div>
  );
}
