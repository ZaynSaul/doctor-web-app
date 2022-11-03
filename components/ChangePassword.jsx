import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ChangePassword = () => {
  return (
    <div className="flex items-center justify-center">
      <form className="form">
        <div className="flex flex-col my-2 ">
          <label className="my-1">Old Password</label>
          <div className="flex flex-row justify-start items-center w-[300px] h-[50px] border border-gray-500 rounded-md ">
            <FontAwesomeIcon icon={faLock} className="w-20 text-lg" />
            <input
              type="text"
              className="w-full h-[45px] bg-transparent border-none outline-none"
              placeholder="Enter password"
            />
          </div>
        </div>
        <div className="flex flex-col my-2">
          <label className="my-1">New Password</label>
          <div className="flex flex-row justify-start items-center w-[300px] h-[50px] border border-gray-500 rounded-md ">
            <FontAwesomeIcon icon={faLock} className="w-20 text-lg" />
            <input
              type="text"
              className="w-full h-[45px] bg-transparent border-none outline-none"
              placeholder="Enter password"
            />
          </div>
        </div>
        <div className="flex flex-col my-2">
          <label className="my-1">Confirm Password</label>
          <div className="flex flex-row justify-start items-center w-[300px] h-[50px] border border-gray-500 rounded-md ">
            <FontAwesomeIcon icon={faLock} className="w-20 text-lg" />
            <input
              type="text"
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

export default ChangePassword;
