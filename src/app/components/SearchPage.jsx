// components/SearchPage.jsx
'use client'; 
import React from 'react';
import Link from 'next/link'; 
import { useSearchParams } from 'next/navigation';
import { properties } from '../data'; 
import PropertyCard from './PropertyCard';

export default function SearchPage() {
  const searchParams = useSearchParams();
  
  const keyword = searchParams.get('keyword') || '';
  const preference = searchParams.get('preference') || 'Preference';
  const location = searchParams.get('location') || 'Location';

  // Filter properties based on search criteria
  const filteredProperties = properties.filter(property => {
    const matchesKeyword = property.title.toLowerCase().includes(keyword.toLowerCase());
    const matchesPreference = preference === 'Preference' || property.category === preference;
    const matchesLocation = location === 'Location' || property.location === location;
    
    return matchesKeyword && matchesPreference && matchesLocation;
  });

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProperties.length > 0 ? (
        filteredProperties.map((property, index) => (
          <Link key={index} href={`/properties/${property.title.split(' ').join('-')}`}>
            <PropertyCard {...property} />
          </Link>
        ))
      ) : (
        <p className='text-center text-white bg-slate-600 w-100 py-10'>No properties found matching your search criteria.</p>
      )}
    </div>
  );
}
