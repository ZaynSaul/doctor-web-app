import React from "react";
import { toast } from "react-toastify";
import { signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const Logout = ({ showLogout, setLogout }) => {
  const logoutClickHandler = () => {
    signOut({ callbackUrl: "http://localhost:3000/auth" }).then(() => {
      toast.success("Logging out!", {
        position: toast.POSITION.TOP_RIGHT,
        duration: 3000,
      });
    });
  };
  return (
    <div
      className={`absolute top-16 right-6 w-64 z-50 bg-gray-900 rounded divide-y divide-gray-100 shadow dark:bg-gray-700 ${
        showLogout ? "block" : "hidden"
      }`}
    >
      <div class=" p-2 w-full">
        <div class="relative">
          <button
            onClick={() => setLogout(false)}
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-black/70 hover:text-gray-900  text-sm  ml-auto w-[30px] h-[30px] rounded-full flex items-center justify-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="popup-modal"
          >
            <FontAwesomeIcon
              icon={faClose}
              className=" text-2xl text-gray-100"
            />
            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-6 text-center">
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className=" text-3xl text-red-500"
            />
            <p class="mb-5 text-md font-normal text-gray-500 dark:text-gray-400">
              Ready to leave?
            </p>
            <h3 class="mb-5 text-md font-normal text-gray-500 dark:text-gray-400">
              Click on Yes to Logout
            </h3>
            <div className="flex justify-between items-center">
              <button
                type="button"
                className="text-white bg-green-500 hover:bg-transparent   rounded-lg hover:border hover:border-green-500  text-sm font-medium px-5 py-2.5 hover:text-green-500 focus:z-10 "
                onClick={() => logoutClickHandler()}
              >
                Yes
              </button>
              <button
                onClick={() => setLogout(false)}
                type="button"
                className="text-white bg-red-500  rounded-lg border border-red-500 text-sm font-medium px-5 py-2.5  focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-gray-600"
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

export default Logout;
