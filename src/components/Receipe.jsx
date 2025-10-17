import React from 'react';

const Receipe = ({receipe}) => {
  const {img, title} = receipe;
  return (
    <div className='bg-green-100 rounded-md pb-4'>
      <img className='w-40 h-40 mb-2' src={img} alt="" />
      <h2 className='hover:text-orange-600 text-sm '>{title}</h2>
    </div>
  );
};

export default Receipe;