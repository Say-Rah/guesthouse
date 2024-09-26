import Link from 'next/link';
import React from 'react';

const Goback = () => {
  return (
    <div className="text-center pt-8">
      <Link href="/" className="bg-primary text-white py-3 px-5 rounded hover:bg-blue-600">
        Go Home
      </Link>
    </div>
  );
};

export default Goback;
