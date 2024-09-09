import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-blue-600">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-gray-600">Sorry, the page you're looking for doesn't exist.</p>
      <Link 
        to="/" 
        className="mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
