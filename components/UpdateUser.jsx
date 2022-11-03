import {
  faEnvelope,
  faLockOpen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UpdateUser = () => {
  return (
    <div className="flex items-center justify-center">
      <form className="form">
        <h3>Update user details</h3>
        <div className="flex flex-col my-2">
          <label>Name</label>
          <div className="flex flex-row justify-start items-center w-[300px] h-[50px] border border-gray-500 rounded-md ">
            <FontAwesomeIcon icon={faUser} className="w-20 text-lg" />
            <input
              type="text"
              className="w-full h-[45px] bg-transparent border-none outline-none"
              placeholder="Enter Name"
            />
          </div>
        </div>
        <div className="flex flex-col my-2">
          <label>Email</label>
          <div className="flex flex-row justify-start items-center w-[300px] h-[50px] border border-gray-500 rounded-md ">
            <FontAwesomeIcon icon={faEnvelope} className="w-20 text-lg" />
            <input
              type="email"
              className="w-full h-[45px] bg-transparent border-none outline-none"
              placeholder="Enter email"
            />
          </div>
        </div>
        <div className="flex flex-col my-2">
          <label>Password</label>
          <div className="flex flex-row justify-start items-center w-[300px] h-[50px] border border-gray-500 rounded-md ">
            <FontAwesomeIcon icon={faLockOpen} className="w-20 text-lg" />
            <input
              type="password"
              className="w-full h-[45px] bg-transparent border-none outline-none"
              placeholder="Enter password"
            />
          </div>
        </div>
        <div className="flex flex-col my-2">
          <button className="bg-green-500 rounded-md text-white text-lg p-2 cursor-pointer hover:scale-105 ease-in duration-300">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
