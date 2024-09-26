"use client"
import React from 'react';
import { useRouter } from 'next/navigation'; // If using Next.js for routing


const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto py-20 text-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <i className="bi bi-exclamation-triangle text-primary text-6xl"></i>
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg mb-4">
          Sorry, the page you are looking for is not found! Maybe go to our home page or try to use a search?
        </p>
        <button
          className="bg-primary text-white py-3 px-5 rounded-md hover:bg-opacity-80 transition"
          onClick={() => router.push('/')}
        >
          Go Back To Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
