import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Card = ({ link, icon, bIcon, text, count }) => {
  return (
    <div className="p-4 w-full flex-1 bg-white rounded-lg border border-gray-200 shadow-md cursor-pointer hover:scale-105 ease-in duration-300 md:mx-w-sm md:w-56 sm:w-56">
      <div className="flex justify-between items-center">
        <div className=" w-[40px] h-[40px] rounded-full bg-teal-100 flex justify-center items-center">
          <FontAwesomeIcon
            icon={icon}
            className="text-xl w-[30px] text-teal-500"
          />
        </div>
        <p className="text-xl text-gray-500 font-bold">{count}</p>
      </div>
      <p className="mb-3  font-normal text-gray-500 dark:text-gray-400">
        {text}
      </p>
      <Link href={link}>
        <a className="inline-flex items-center text-sm text-blue-600 hover:underline">
          View More
          <FontAwesomeIcon icon={bIcon} className=" w-[30px] text-blue-600" />
        </a>
      </Link>
    </div>
  );
};

export default Card;
