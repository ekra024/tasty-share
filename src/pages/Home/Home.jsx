import React from 'react';
import Banner from './Banner';
import Foods from '../Foods/Foods'
import TopChef from '../../components/TopChef';
import ExploreReceipes from './ExploreReceipes';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <Banner />
      <Foods/>
      <ExploreReceipes/>
      <TopChef />
      <Contact/>
    </div>
  );
};

export default Home;