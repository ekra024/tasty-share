import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../../../public/'

const ErrorPage = () => {
  return (
   <div className='h-screen text-center'>
      <div className='flex justify-center my-10'>
        <h1 className='text-5xl font-semibold'>No Page Found</h1>
      </div>
      <div>
        <Link className='border px-4 py-2 rounded-4xl border-blue-400 font-semibold  hover:bg-blue-200 text-white bg-blue-700 hover:text-black' to="/">Go Back Home</Link>
      </div>
    </div>

  );
};

export default ErrorPage;