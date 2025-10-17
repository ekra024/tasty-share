import React, { useEffect, useState } from "react";
import Food from "./Food";
import axios from "axios";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get(`https://tasty-share-server.vercel.app/foods`).then((res) => {
      const data = res.data;
      const filterData = data.filter((item) => item.status === "available");
      setFoods(filterData.slice(0, 6));
    });
  }, []);

  return (
    <div className="w-9/12 mx-auto">
      <h2 className="text-4xl text-center Nunito">TOP FOODS</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {foods.map((food) => (
          <Food key={food._id} food={food}></Food>
        ))}
      </div>
      <div className="flex justify-center mt-5 ">
        <Link
          to="/allFood"
          className="font-semibold p-2 Nunito shadow-2xl bg-green-500 text-white hover:bg-green-700 rounded-xl flex w-max items-center gap-2"
        >
          See All Food <GoArrowRight />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Foods;
