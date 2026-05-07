import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddFood = () => {
  const { error, user } = useAuth();
  const [minDate, setMinDate] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  const handleAddFood = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    fetch(`https://tasty-share-server.vercel.app/foods`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(initialData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "New Movie Added Successfully",
            icon: "success",
            confirmButtonText: "Sucessfully Added",
          });
          navigate("/allFood");
        }
      });
  };

  return (
    <div className="bg-[#FFF8F0] mx-5">
      <div className="bg-white shadow-[rgba(255,76,41,0.2)] shadow-md p-3">
        <h1 className="text-3xl font-extrabold text-center text-[#FF4C29]">
          Add A Food
        </h1>
        <form className="" onSubmit={handleAddFood}>
          {/* Food Title & Poster */}
          <div className="md:flex mb-8">
            <div className="font-semibold md:w-1/2">
              <label className="label">
                <span className="text-black">Food Name</span>
              </label>
              <input
                type="text"
                placeholder="Food Name"
                className="input input-bordered w-full text-black border-black placeholder: bg-white"
                name="name"
                required
              />
            </div>

            <div className="form-control font-semibold text-black md:w-1/2 md:ml-4 mt-8 md:mt-0">
              <label className="label">
                <span className="text-black">Food Image</span>
              </label>
              <input
                type="url"
                placeholder="Food Photo URL"
                className="input input-bordered w-full text-black border-black placeholder: bg-white"
                name="photo"
                required
              />
            </div>
          </div>

          {/* Duration & Release Year */}
          <div className="md:flex text-black font-semibold mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-black">Food Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Food Quantity"
                className="input input-bordered w-full text-black border-black placeholder: bg-white"
                name="quantity"
                required
              />
            </div>

            {/* Release Year Radio */}
            <div className="form-control font-semibold md:w-1/2 md:ml-4 mt-8 md:mt-0">
              <label className="label">
                <span className="text-black">Pickup Location</span>
              </label>
              <select
                name="place"
                required
                className="w-full border p-2"
              >
                {[
                  "Dhaka",
                  "Jashore",
                  "Barishal",
                  "Khulna",
                  "Rangpur",
                  "Mymensings",
                ].map((place) => (
                  <option
                    key={place}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    {place}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Rating & Summary */}
          <div className="md:flex mb-8">
            <div className="form-control font-semibold text-black md:w-1/2">
              <label className="label">
                <span className="text-black">Expired Date</span>
              </label>
              <input
                type="date"
                placeholder="Expired Date"
                className="input input-bordered w-full bg-white border-black "
                name="date"
                min={minDate}
                required
              />
            </div>

            <div className="form-control md:w-1/2 font-semibold md:ml-4">
              <label className="label">
                <span className="text-black">Additional Notes</span>
              </label>
              <input
                type="text"
                placeholder="Add Note"
                className="input input-bordered w-full bg-white text-black border-black "
                name="note"
                required
              />
            </div>
          </div>

          {/* Donator Name, Email & Image */}

          <div className="md:flex gap-2 text-black w-full">
            <div className="md:w-1/4 form-control mb-8 font-semibold">
              <label className="label-color">Donator Name</label>
              <input
                type="text"
                value={user.displayName}
                name="donator_name"
                readOnly
                className="input input-bordered w-full bg-white text-[#9CA3AF]"
              />
            </div>
            <div className="md:w-1/4 form-control mb-8 font-semibold">
              <label className="label-color">Donator Email</label>
              <input
                type="email"
                name="donator_email"
                value={user?.email}
                readOnly
                className="input input-bordered w-full bg-white text-[#9CA3AF]"
              />
            </div>
            <div className="md:w-1/4 form-control font-semibold">
              <label className="label-color">Danotor Image</label>
              <input
                type="url"
                name="donator_img"
                value={user?.photoURL}
                readOnly
                className="input input-bordered w-full text-[#9CA3AF] bg-white"
              />
            </div>

            <div className="md:w-1/4 form-control mb-8 text-black font-semibold">
              <label className="label-color">Food Status</label>
              <input
                name="status"
                value="available"
                readOnly
                className="w-full border p-2 border-gray-400 text-[#9CA3AF]"
              />
            </div>
          </div>

          {/* Photo URL */}

          <input
            type="submit"
            value="Add Food"
            className="btn btn-block bg-green-600 text-white hover:bg-green-700"
          />
        </form>
      </div>
      {error ? <div className="text-red-600">{error}</div> : ""}
    </div>
  );
};

export default AddFood;
