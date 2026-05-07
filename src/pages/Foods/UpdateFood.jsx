import axios from "axios";
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateFood = () => {
  const foodData = useLoaderData();
  const { _id, name, photo, status, quantity } = foodData;
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const Data = Object.fromEntries(form.entries());

    axios
      .put(`https://tasty-share-server.vercel.app/foods/${_id}`, Data)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Sucessully Updated", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          setTimeout(() => {
            navigate("/myFood");
          }, 2500);
        }
      });
  };

  return (
    <div className="px-20 py-5 mx-auto bg-[#FFF8F0] ">
      <h1 className="text-center font-semibold text-2xl">Update the Form</h1>
      <form
        onSubmit={handleUpdate}
        className="lg:w-5/12 md:w-1/2 mx-auto bg-white p-5 shadow-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            name="name"
            defaultValue={name}
            className="input input-bordered w-full "
          />
          <input
            name="photo"
            defaultValue={photo}
            className="input input-bordered w-full"
          />
          <input
            readOnly
            value={status}
            className="input input-bordered w-full"
          />
          <input
            name="quantity"
            defaultValue={quantity}
            className="input input-bordered w-full"
          />
        </div>

        <div className="flex justify-center gap-3 mt-4">
          <button
            type="submit"
            className="btn bg-[#06D6A0] hover:bg-[#04B184] text-white"
          >
            Update Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateFood;
