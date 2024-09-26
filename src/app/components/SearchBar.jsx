// components/SearchBar.jsx
'use client'; // Ensure this is a client component
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation in app directory

export default function SearchBar() {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const [preference, setPreference] = useState('Preference');
  const [location, setLocation] = useState('Location');

  const handleSearch = (event) => {
    event.preventDefault();
    // Redirect to the search page with query parameters
    router.push(`/search?keyword=${encodeURIComponent(keyword)}&preference=${encodeURIComponent(preference)}&location=${encodeURIComponent(location)}`);
  };

  return (
    <div className="w-full">
      <div className="bg-primary mb-5 p-4 sm:p-8 w-full">
        <div className="container mx-auto">
          <form className="flex flex-col gap-4 md:flex-row" onSubmit={handleSearch}>
            <div className="w-full md:flex-1">
              <input 
                type="text" 
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:ring focus:ring-blue-300" 
                placeholder="Search Keyword" 
              />
            </div>
            <div className="w-full md:w-auto">
              <select 
                value={preference}
                onChange={(e) => setPreference(e.target.value)}
                className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:ring focus:ring-blue-300"
              >
                <option>Preference</option>
                <option value="Luxury GRA">Luxury GRA</option>
                <option value="House X">House X</option>
                <option value="Royal Benin">Royal Benin</option>
              </select>
            </div>
            <div className="w-full md:w-auto">
              <select 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:ring focus:ring-blue-300"
              >
                <option>Location</option>
                <option value="Ikeja">Ikeja</option>
                <option value="Yaba">Yaba</option>
                <option value="Surulere">Surulere</option>
              </select>
            </div>
            <div className="w-full md:w-auto">
              <button 
                type="submit" 
                className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
