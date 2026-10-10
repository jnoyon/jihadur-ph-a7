import React from "react";
import { FiCornerDownLeft } from "react-icons/fi";

export default function page() {
  return (
    <div className="md:w-2/4 mx-auto">
      <div className="bg-white border border-gray-300 p-5 flex justify-between mb-5">
        <div className="flex">
          <div className="">
            <h1> Name </h1>
            <span> email </span>
          </div>
        </div>
        <button className="btn btn-outline btn-error">
          {" "}
          <FiCornerDownLeft /> লগআউট{" "}
        </button>
      </div>
      <div className="bg-white border border-gray-300 p-5 mb-5">
        <h2 className="text-2xl font-bold mb-3"> তথ্য </h2>
        <label className="font-bold"> নাম </label>
        <input type="text" className="w-full input mb-2" />
        <button className="btn btn-success w-full text-white"> আপডেট </button>
      </div>
    </div>
  );
}
