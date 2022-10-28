import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function InputField({ icon, type, placeholder, name }) {
  return (
    <div className="flex flex-row justify-center items-center  w-[300px] h-[40px] border border-gray-400 rounded-md">
      <FontAwesomeIcon icon={icon} className="w-20" />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full h-[38px] border bg-transparent outline-none border-none"
        autoFocus
      />
    </div>
  );
}

export function SelectField({ icon, type, name }) {
  return (
    <div className="flex flex-row justify-center items-center  w-[300px] h-[40px] border border-gray-400 rounded-md">
      <FontAwesomeIcon icon={icon} className="w-20" />
      <select
        className="w-full h-[38px] border bg-transparent outline-none border-none"
        type={type}
        name={name}
      >
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  );
}
