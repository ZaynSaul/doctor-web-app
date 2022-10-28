import React from "react";
import { toast } from "react-toastify";
import { signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faCircleExclamation,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";

const ViewAppointment = ({ viewAppointment, setViewAppointment }) => {
  return (
    <div
      className={` overflow-y-auto overflow-x-hidden fixed top-0  w-full md:inset-0 h-modal md:h-full z-50 bg-black/70 rounded divide-y divide-gray-100 flex items-center justify-center ${
        viewAppointment ? "block" : "hidden"
      }`}
    >
      <div className="w-[400px]">
        <div className="relative bg-gray-700 text-white rounded-lg shadow p-4">
          <div className="flex flex-row justify-evenly items-center mb-4">
            <h3>Details</h3>
            <button
              onClick={() => setViewAppointment(false)}
              type="button"
              className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900  text-sm  ml-auto w-[30px] h-[30px] rounded-full flex items-center justify-center dark:hover:bg-gray-800 dark:hover:text-white hover:scale-105 ease-in duration-300"
              data-modal-toggle="popup-modal"
            >
              <FontAwesomeIcon
                icon={faClose}
                className=" text-2xl text-gray-300"
              />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div class="">
            <form>
              <div className="flex flex-row items-center gap-2">
                <label>Name: </label>
                <input
                  className="w-full h-[40px] border-none outline-none bg-transparent pl-2"
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                  disabled
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <label>Address: </label>
                <input
                  className="w-full h-[40px] border-none outline-none bg-transparent pl-2"
                  type="text"
                  name="name"
                  placeholder="Bundung"
                  disabled
                />
              </div>
              <div className="flex flex-row items-center gap-2">
                <label>Email: </label>
                <input
                  className="w-full h-[40px] border-none outline-none bg-transparent pl-2"
                  type="text"
                  name="name"
                  placeholder="Jane@user.com"
                  disabled
                />
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-2">
                  <label>Phone: </label>
                  <input
                    className="w-full h-[40px] border-none outline-none bg-transparent pl-2"
                    type="text"
                    name="name"
                    placeholder="1234567"
                    disabled
                  />
                </div>
                <div className="flex flex-row items-center gap-2">
                  <label>Status: </label>
                  <input
                    className="w-full h-[40px] border-none outline-none bg-transparent pl-2"
                    type="text"
                    name="name"
                    placeholder="Revisit"
                    disabled
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between items-center mt-2">
                <div className="w-[250px] h-[40px] border border-gray-300 rounded-sm p-1 flex flex-row items-center gap-2">
                  <FontAwesomeIcon icon={faCalendarPlus} />
                  <input
                    className="w-full h-[40px] border-none outline-none bg-transparent pl-2"
                    type="date"
                    name="name"
                    placeholder="Jane Doe"
                  />
                </div>
                <button className="bg-green-500 text-white p-2 rounded-sm hover:scale-105 ease-in duration-300">
                  Set Date
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAppointment;
