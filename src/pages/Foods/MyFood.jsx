import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import MyFoodTable from "./MyFoodTable";

const MyFood = () => {
  const { user } = useAuth();
  const email = user?.email;

  const [myFood, setMyFood] = useState([]);
  useEffect(() => {
    axios
      .get(`https://tasty-share-server.vercel.app/foods?email=${email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setMyFood(res.data);
      });
  }, [email, myFood]);

  return (
    <div className="bg-[#FFF8F0] px-20 py-5">
      <h1 className="text-3xl font-semibold text-center text-[#FF4C29] mb-5">
        My Added Food
      </h1>
      <div className="overflow-x-auto bg-white">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Food Image</th>
              <th>Status</th>
              <th>Qunatity</th>
              <th>Date</th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {myFood.map((food) => (
              <MyFoodTable setMyFood={setMyFood} food={food} key={food._id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFood;
