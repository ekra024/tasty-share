import React, { useEffect, useState } from "react";
import Food from "./Food";
import axios from "axios";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [isThree, setIsThree] = useState(true);

  useEffect(() => {
    fetch("https://tasty-share-server.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  useEffect(() => {
    axios
      .get(`https://tasty-share-server.vercel.app/foods?search=${search}`)
      .then((res) => setFoods(res.data));
  }, [search]);

  return (
    <div className="bg-[#FFF8F0]">
      <h2 className="text-3xl text-[#FF4C29] text-center py-3 font-semibold">
        All Foods Here
      </h2>
      <div className="w-10/12 mx-auto my-5 flex justify-between">
        <input
          className="p-2 bg-white rounded-xl text-black "
          type="text"
          placeholder="Search By Food Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="">
          {isThree ? (
            <button
              onClick={() => setIsThree(!isThree)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2"
            >
              Two Colume
            </button>
          ) : (
            <button
              onClick={() => setIsThree(!isThree)}
              className="bg-neutral px-4 py-2 text-white"
            >
              Three Colume
            </button>
          )}
        </div>
      </div>
      <div
        className={`grid md:grid-cols-2 ${
          isThree ? "lg:grid-cols-3" : "lg:grid-cols-2"
        } w-10/12 mx-auto gap-5`}
      >
        {foods.map(
          (food) =>
            food.status === "available" && <Food key={food._id} food={food} />
        )}
      </div>
    </div>
  );
};

export default AllFoods;
