import React from 'react';

import { GiCook } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";

const JoinUs = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="nunito uppercase tracking-[4px] text-[#FF4C29] font-bold mb-4">
            Food Community
          </p>

          <h1 className="lato text-5xl font-black text-gray-900 mb-6">
            More Than Recipes <br />
            It's A Food Experience
          </h1>

          <p className="nunito text-gray-600 text-lg leading-8">
            Connect with passionate cooks, discover unique dishes, and share your
            kitchen creativity with a vibrant community of food enthusiasts.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-[#FFF8F0] rounded-[30px] p-10 hover:-translate-y-3 duration-300 shadow-lg hover:shadow-xl">

            <div className="w-20 h-20 bg-[#FF4C29]/10 rounded-2xl flex items-center justify-center mb-8">
              <GiCook className="text-5xl text-[#FF4C29]" />
            </div>

            <h2 className="lato text-3xl font-black text-gray-900 mb-4">
              Share Recipes
            </h2>

            <p className="nunito text-gray-600 leading-8">
              Upload your favorite homemade dishes and inspire thousands of food lovers worldwide.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFF8F0] rounded-[30px] p-10 hover:-translate-y-3 duration-300 shadow-lg hover:shadow-xl">

            <div className="w-20 h-20 bg-[#FF4C29]/10 rounded-2xl flex items-center justify-center mb-8">
              <FaHeart className="text-5xl text-[#FF4C29]" />
            </div>

            <h2 className="lato text-3xl font-black text-gray-900 mb-4">
              Save Favorites
            </h2>

            <p className="nunito text-gray-600 leading-8">
              Bookmark delicious recipes and build your personal collection of must-try dishes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FFF8F0] rounded-[30px] p-10 hover:-translate-y-3 duration-300 shadow-lg hover:shadow-xl">

            <div className="w-20 h-20 bg-[#FF4C29]/10 rounded-2xl flex items-center justify-center mb-8">
              <MdTravelExplore className="text-5xl text-[#FF4C29]" />
            </div>

            <h2 className="lato text-3xl font-black text-gray-900 mb-4">
              Explore Cultures
            </h2>

            <p className="nunito text-gray-600 leading-8">
              Discover authentic flavors and traditional dishes from different cuisines around the globe.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JoinUs;