import React from 'react';
import Typewriter from 'typewriter-effect';

const BannerTitle = () => {
  return (
    <div className='text-green-700 text-5xl font-extrabold absolute top-50 left-40 lg:left-70 flex'>
      S
      <Typewriter options={{
        strings:["hare Meal With Friends","hare Meal With Neighbours","hare Meal With People"],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 100,
      }} />
    </div>
  );
};

export default BannerTitle;