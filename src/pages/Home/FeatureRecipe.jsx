import React from 'react';
import chef from "../../../public/chef6.avif"
import receipe from "../../../public/image22.jpeg"

const FeatureRecipe = () => {
  return (
   

<section class="bg-[#FFF8F0] py-20 px-6">
  <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">


    <div>
      <p class="nunito text-[#FF4C29] font-bold uppercase tracking-[4px] mb-4">
        Trending Recipes
      </p>

      <h1 class="lato text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
        Discover Recipes <br/>
        Crafted With Passion
      </h1>

      <p class="nunito text-gray-600 text-lg leading-8 mb-8 max-w-xl">
        Explore delicious homemade recipes shared by food lovers around the world.
        Save your favorites, share your own creations, and turn everyday cooking
        into something unforgettable.
      </p>

      <div class="flex flex-wrap gap-4">
        <button class="nunito bg-[#FF4C29] hover:scale-105 duration-300 text-white px-8 py-4 rounded-full font-bold shadow-xl">
          Explore Recipes
        </button>

        <button class="nunito border-2 border-[#FF4C29] text-[#FF4C29] hover:bg-[#FF4C29] hover:text-white duration-300 px-8 py-4 rounded-full font-bold">
          Share Recipe
        </button>
      </div>

   
      <div class="grid grid-cols-3 gap-6 mt-14">
        <div>
          <h2 class="lato text-4xl font-black text-[#FF4C29]">12K+</h2>
          <p class="nunito text-gray-600 mt-2">Recipes</p>
        </div>

        <div>
          <h2 class="lato text-4xl font-black text-[#FF4C29]">8K+</h2>
          <p class="nunito text-gray-600 mt-2">Food Lovers</p>
        </div>

        <div>
          <h2 class="lato text-4xl font-black text-[#FF4C29]">1.5K+</h2>
          <p class="nunito text-gray-600 mt-2">Daily Shares</p>
        </div>
      </div>
    </div>

  
    <div class="relative">
      <img
        src={receipe}
        class="rounded-[40px] shadow-2xl h-[650px] object-fit w-full"
      />

      
      <div class="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl w-72">
        <div class="flex items-center gap-4">
          <img
            src={chef}
            class="w-14 h-14 rounded-full"
          />

          <div>
            <h3 class="nunito font-bold text-lg">Chef Asif Rahman</h3>
            <p class="nunito text-sm text-gray-500">
              Shared 240+ recipes
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
  );
};

export default FeatureRecipe;