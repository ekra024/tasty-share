import React, { useEffect, useState } from 'react';
import Chef from './Chef';

const TopChef = () => {

  const [chefs , setChefs] = useState([]);

  useEffect(() => {
    fetch('/chefs.json')
    .then(res => res.json())
    .then(data => setChefs(data))
  },[])

  return (
    <div className='w-9/12 mx-auto px-10  bg-white py-5 my-10 mt-20'>
      <h2 className='text-4xl text-center mb-5 nunito'>TOP CHEFS</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
          chefs.map(chef => <Chef key={chef.id} chef={chef}/> )
        }
      </div>
    </div>
  );
};

export default TopChef;