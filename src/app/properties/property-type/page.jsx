import React from 'react'
import PropertyTypes from '@/app/components/PropertyTypes';
import SearchBar from '@/app/components/SearchBar';
import Header2 from '@/app/components/Header2';



export default function PropertyTypePage() {
    return (
        <div>
          {/* Other components like the Header */}
          <Header2/>
          <SearchBar />
          <PropertyTypes />
          {/* Other sections of your page */}
        </div>
      );
    }
    
