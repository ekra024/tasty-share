import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import RequtedFoodTable from "./RequtedFoodTable";

const MyRequest = () => {
  const { user } = useAuth();
  const email = user.email;
  const [request, setRequest] = useState([]);

  useEffect(() => {
    axios
      .get(`https://tasty-share-server.vercel.app/requests?email=${email}`, {
        withCredentials: true,
      })
      .then((res) => setRequest(res.data));
  }, [email]);

  return (
    <div className="bg-[#FFF8F0] px-20 py-5">
      <h1 className="text-3xl font-semibold text-center text-[#FF4C29] mb-5">
        My Requested Food
      </h1>
      <div className="overflow-x-auto bg-white">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Food Image</th>
              <th>Pickup Location</th>
              <th>Donator Name</th>
              <th>Request Date</th>
              <th>Expired Date</th>
            </tr>
          </thead>
          <tbody>
            {request.map((food) => (
              <RequtedFoodTable food={food} key={food._id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRequest;
