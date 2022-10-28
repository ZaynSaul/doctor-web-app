import React from "react";
import { toast } from "react-toastify";
import { signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const Delete = ({ deleteConfirmation, confirm, closePopup }) => {
  return (
    <div
      className={` overflow-y-auto overflow-x-hidden fixed top-0  w-full md:inset-0 h-modal md:h-full z-50 bg-black/70 rounded divide-y divide-gray-100 flex items-center justify-center ${
        confirm ? "block" : "hidden"
      }`}
    >
      <div className=" p-2 w-64">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            onClick={() => closePopup()}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900  text-sm  ml-auto w-[30px] h-[30px] rounded-full flex items-center justify-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="popup-modal"
          >
            <FontAwesomeIcon
              icon={faClose}
              className=" text-2xl text-gray-300"
            />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className=" text-3xl text-red-500"
            />
            <p className="mb-5 text-md font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this data
            </p>
            <h3 className="mb-5 text-md font-normal text-gray-500 dark:text-gray-400">
              Click on Yes to Delete
            </h3>
            <div className="flex justify-between items-center">
              <button
                type="button"
                className="text-white bg-white hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-green-500 dark:text-gray-300 dark:border-green-500 dark:hover:text-white"
                onClick={() => deleteConfirmation()}
              >
                Yes
              </button>
              <button
                onClick={() => closePopup()}
                type="button"
                className="text-red-500 bg-white  rounded-lg border border-red-500 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-gray-600"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
