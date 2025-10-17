import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";

const FoodDetails = () => {
  const food = useLoaderData();
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const {
    name,
    photo,
    quantity,
    status,
    place,
    date,
    note,
    donator_name,
    donator_email,
    donator_img,
    _id,
  } = food;

  const currentDate = new Date().toLocaleDateString();

  const handleRequest = (e) => {
    e.preventDefault();
    food.status = "requested";
    const form = e.target;
    const requestData = {
      foodId: _id,
      foodName: name,
      foodImage: photo,
      donatorEmail: donator_email,
      donatorName: donator_name,
      userEmail: user.email,
      requestDate: currentDate,
      pickupLocation: place,
      expireDate: date,
      additionalNotes: form.notes.value,
    };

    axios
      .patch(`https://tasty-share-server.vercel.app/foods/${_id}`, food)
      .then(() => {});

    axios
      .post(`https://tasty-share-server.vercel.app/requests`, requestData, {
        withCredentials: true,
      })
      .then((res) => {
        const data = res.data;
        if (data.insertedId) {
          toast.success("Request Granted");
        }
      });

    setModal(false);
    navigate("/myRequest");
  };

  return (
    <section className="h-max bg-[#FFF8F0] px-4">
      <h1 className="font-semibold text-center text-3xl py-5">FOOD DETAILS</h1>
      <div className="w-10/12 mx-auto lg:flex bg-white rounded-2xl shadow-lg shadow-[rgba(255,76,41,0.1)]">
        {/* Left Image */}
        <div className="bg-white lg:w-1/2">
          <img src={photo} alt={name} className="p-3 max-h-90 rounded-4xl" />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2">
          <div className="md:flex justify-between lg:py-2 px-6 md:px-10 space-y-4">
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-semibold text-[#FF4C29]">{name}</h1>
              <p className="text-gray-600 text-base">{note}</p>

              {/* Food Meta Info */}
              <div className="space-y-2 text-[#2B2B2B]">
                <p>
                  <span className="font-semibold">Quantity:</span> {quantity}
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Status:</span>
                  <span
                    className={`badge text-white border-none ${
                      status === "available" ? "bg-[#06D6A0]" : "bg-red-500"
                    }`}
                  >
                    {status}
                  </span>
                </p>
                <p>
                  <span className="font-semibold">Place:</span> {place}
                </p>
                <p>
                  <span className="font-semibold">Date:</span> {date}
                </p>
              </div>
            </div>

            {/* Donator Info */}
            <div className="h-max flex items-center gap-4 bg-[#eeccb4] p-3 rounded-xl mt-6 w-1/2">
              <img
                src={donator_img}
                alt={donator_name}
                className="rounded-full w-10 h-10 border-2 border-[#FF4C29]"
              />
              <div>
                <p className="font-semibold text-[#2B2B2B]">{donator_name}</p>
                <p className="text-sm text-gray-500">{donator_email}</p>
              </div>
            </div>

            {/* Request Button */}
          </div>
          <button
            onClick={() => setModal(true)}
            className="btn bg-[#06D6A0] hover:bg-[#04B184] text-white font-semibold my-4 ml-5 w-auto  lg:ml-10"
          >
            Request This Food
          </button>
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#FF4C29] mb-4 text-center">
              Request This Food
            </h2>

            <form onSubmit={handleRequest} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  readOnly
                  value={name}
                  className="input input-bordered bg-[#FFF2E9]"
                />
                <input
                  readOnly
                  value={photo}
                  className="input input-bordered bg-[#FFF2E9]"
                />
                <input
                  readOnly
                  value={_id}
                  className="input input-bordered bg-[#FFF2E9]"
                />
                <input
                  readOnly
                  value={donator_email}
                  className="input input-bordered bg-[#FFF2E9]"
                />
                <input
                  readOnly
                  value={donator_name}
                  className="input input-bordered bg-[#FFF2E9]"
                />
                <input
                  readOnly
                  value={user.email}
                  className="input input-bordered bg-[#FFF2E9]"
                />
                <input
                  readOnly
                  value={currentDate}
                  className="input input-bordered bg-[#FFF2E9]"
                />
                <input
                  readOnly
                  value={place}
                  className="input input-bordered bg-[#FFF2E9]"
                />
                <input
                  readOnly
                  value={date}
                  className="input input-bordered bg-[#FFF2E9]"
                />
              </div>

              <input
                name="notes"
                type="text"
                placeholder="Additional Notes..."
                className="textarea textarea-bordered w-full bg-[#FFF2E9] mt-2"
              />

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setModal(false)}
                  className="btn bg-gray-300 text-black hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn bg-[#06D6A0] hover:bg-[#04B184] text-white"
                >
                  Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default FoodDetails;
