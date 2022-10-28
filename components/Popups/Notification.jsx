import React from "react";
import { toast } from "react-toastify";
import { signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faCircleExclamation,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";

const ViewNotification = ({ isNoteModal, setIsNoteModal }) => {
  return (
    <div
      className={`absolute top-16 right-32 w-[200px] z-50 bg-white rounded divide-y divide-gray-100 shadow ${
        isNoteModal ? "block" : "hidden"
      }`}
    >
      <div class="w-full text-gray-500 p-2">
        <div class="">
          <div className="flex flex-row justify-evenly items-center mb-4">
            <h3>Details</h3>
            <button
              onClick={() => setIsNoteModal(false)}
              type="button"
              className=" text-gray-800 bg-transparent hover:bg-gray-200 hover:text-gray-600  text-sm  ml-auto w-[30px] h-[30px] rounded-full flex items-center justify-center hover:scale-105 ease-in duration-300"
              data-modal-toggle="popup-modal"
            >
              <FontAwesomeIcon
                icon={faClose}
                className=" text-2xl text-gray-600"
              />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-6 text-center">
            <p>Notifications</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNotification;
