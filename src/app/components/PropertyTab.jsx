import Link from 'next/link';
import React from 'react';

const PropertyTabs = () => {
  return (
    <div className="text-left lg:text-right animate-slideInRight">
    <ul className="flex justify-start lg:justify-end mb-5 space-x-2">
      <li className="nav-item">
        {/* <Link
          className="border border-primary text-primary hover:bg-primary hover:text-white py-2 px-4 active:bg-primary active:text-white"
          href="#tab-1"
        >
          Featured
        </Link> */}
      </li>
      <li className="nav-item">
        {/* <Link
          className="border border-primary text-primary hover:bg-primary hover:text-white py-2 px-4"
          href="#tab-2"
        >
          For Rent
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="border border-primary text-primary hover:bg-primary hover:text-white py-2 px-4"
          href="#tab-3"
        >
          For Rent
        </Link> */}
      </li>
    </ul>
  </div>
  );
};

export default PropertyTabs;
