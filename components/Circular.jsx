import React from "react";
import Logo from "../assets/images/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeartbeat, faStethoscope } from "@fortawesome/free-solid-svg-icons";

const Circular = () => {
  return (
    <div className="relative flex justify-center items-center mt-6">
      <div
        className="mt-6 absolute z-30 left-4 bg-white cursor-pointer flex justify-center items-center rounded-full w-[50px] h-[50px]
      hover:scale-105 ease-in duration-300"
      >
        <Image className="" src={Logo} alt="Circular" />
      </div>
      <div
        className="mt-6 absolute z-30 right-4 bg-white  flex justify-center items-center rounded-full w-[50px] h-[50px] 
      cursor-pointer hover:scale-105 ease-in duration-300"
      >
        <FontAwesomeIcon
          icon={faStethoscope}
          style={{ fontSize: "25px" }}
          className=" text-gray-500"
        />
      </div>
      <div
        className="absolute z-30 bg-teal-50 border  shadow-xl rounded-full h-[200px] w-[200px] mt-64
       "
      />
      <div
        className="absolute z-20 bg-teal-100 border  shadow-xl rounded-full h-[250px] w-[250px] mt-64
      "
      />
      <div
        className="mb-6 absolute z-30 bottom-0 bg-white cursor-pointer flex justify-center items-center rounded-full w-[50px] h-[50px]
      hover:scale-105 ease-in duration-300"
      >
        <FontAwesomeIcon
          icon={faHeartbeat}
          style={{ fontSize: "25px" }}
          className=" text-[#F14F1A]"
        />
      </div>
      <div
        className="absolute z-10 bg-teal-200 border  shadow-xl rounded-full h-[300px] w-[300px] mt-64
      "
      />
      <div className="absolute bg-teal-300 border  shadow-xl rounded-full h-[350px] w-[350px] mt-64" />
    </div>
  );
};

export default Circular;
