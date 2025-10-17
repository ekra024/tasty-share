import React from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Food = ({ food }) => {
  const { name, photo, quantity, status, _id } = food;

  return (
    <div className="bg-white shadow-[rgba(255,76,41,0.1)] rounded-xl shadow-md">
      {status === "available" ? (
        <div className="p-4">
          <div className="">
            <img className="rounded-xl object-cover h-60 w-full" src={photo} alt="No Image Found" />
          </div>
          <div className="flex justify-between text-xl px-2 my-2 ">
            <h2 className="text-[#2B2B2B]">{name}</h2>
            <h2 className="text-[#FF9B73]">Qunatity: {quantity}</h2>
          </div>
          <div className="text-center">
            <Link
              to={`/details/${_id}`}
              className="bg-green-500 px-8 text-white hover:bg-green-700 font-semibold py-2  rounded-2xl"
            >
              See Details
            </Link>
           
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Food;
