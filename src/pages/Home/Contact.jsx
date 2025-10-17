import React from "react";

const Contact = () => {
  return (
    <section
      className="relative py-10 text-center text-white h-max"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/Indian.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="md:flex gap-5 lg:gap-30 lg:pr-40">
        <div className="pl-20 py-30 text-left">
          <h2 className="font-semibold text-2xl">Secret Recipes, Insider Tips & More <br /> – Get the Plattershare Scoop!</h2>
          <p className="my-5 text-[#d1d5db]"> Tasty tales, secret sauces & foodie fun delivered fresh to <br /> your inbox! We need to share our menu with our friends, <br /> family , neighbours and other people </p>
        </div>
        
        <div className="md:w-1/2  px-6 bg-white/10  rounded-2xl p-10 shadow-lg border border-white/20 ">
        <form className="">
          <div className="lg:flex justify-between gap-2">
            <div className="text-left lg:w-1/2 mb-5 lg:mb-0">
            <label htmlFor="">First Name</label><br />
            <input
            type="text"
            placeholder="First Name"
            className="p-3 rounded-lg w-full bg-gray-200 lg:w-full text-green-800 focus:ring-2 focus:ring-green-400 mr-4 mt-2"
          /> 
          </div>
          <div className="lg:w-1/2 text-left">
            <label htmlFor="">Last Name</label> <br />
            <input
            type="text"
            placeholder="Last Name"
            className="lg:w-full mt-2 p-3 rounded-lg w-full  bg-gray-200 text-green-800 focus:ring-2 focus:ring-green-400"
          />
          </div>
          </div>
          <br />
          <div className="lg:w-full text-left mt-2">
            <label className="">Email</label> <br />
            <input
            type="email"
            placeholder="Email Address"
            className="mt-2 w-full bg-gray-200 rounded-lg px-2  py-3 text-green-800 focus:ring-2 focus:ring-green-400"
          />
          </div>
          <br />
          <div className="text-left mt-5">
            <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-3 rounded-lg transition duration-300 "
          >
            Subscribe
          </button>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
};

export default Contact;
