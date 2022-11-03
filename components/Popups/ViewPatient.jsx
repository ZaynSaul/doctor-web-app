import React from "react";
import { toast } from "react-toastify";
import { signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faCircleExclamation,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { getError } from "../../utils/error";
import axios from "axios";

const ViewPatient = ({ viewData, isOpenViewModal, setIsOpenViewModal }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: viewData,
  });

  const submitHandler = async ({ patientName, paId }) => {
    try {
      await axios
        .post("/api/nurse", {
          patientName,
          paId,
        })
        .then(() => {
          toast.success("Data sent to lab successfully!", {
            position: toast.POSITION.TOP_RIGHT,
            duration: 3000,
          });
        });
      setIsOpenViewModal(false);
    } catch (err) {
      toast.error(getError(err), {
        position: toast.POSITION.TOP_RIGHT,
        duration: 3000,
      });
    }
  };
  return (
    <div
      className={` overflow-y-auto overflow-x-hidden fixed top-0  w-full md:inset-0 h-modal md:h-full z-50 bg-black/70 rounded divide-y divide-gray-100 flex items-center justify-center ${
        isOpenViewModal ? "block" : "hidden"
      }`}
    >
      <div className="w-[400px]">
        <div className="relative bg-gray-900 text-white rounded-lg shadow p-4">
          <div className="flex flex-row justify-evenly items-center mb-4">
            <h3>Patient Details</h3>
            <button
              onClick={() => setIsOpenViewModal(false)}
              type="button"
              className=" text-gray-400 bg-transparent hover:bg-gray-800 hover:text-gray-900  text-sm  ml-auto w-[30px] h-[30px] rounded-full flex items-center justify-center dark:hover:bg-gray-800 dark:hover:text-white hover:scale-105 ease-in duration-300"
              data-modal-toggle="popup-modal"
            >
              <FontAwesomeIcon
                icon={faClose}
                className=" text-2xl text-gray-100"
              />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div class="">
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="flex flex-row items-center gap-2">
                <label>Name: </label>
                <input
                  className="w-full h-[40px] border-none outline-none bg-transparent pl-2"
                  type="text"
                  placeholder="Jane Doe"
                  defaultValue={viewData.name}
                  {...register("patientName", {
                    required: "Please enter patient name",
                  })}
                />
                {errors.patientName && (
                  <div className="text-red-500 mt-2">
                    {errors.patientName.message}
                  </div>
                )}
              </div>
              <div className="flex flex-row items-center gap-2">
                <label>Id: </label>
                <input
                  className="w-full h-[40px] border-none outline-none bg-transparent pl-2"
                  type="text"
                  defaultValue={viewData._id}
                  {...register("paId", {
                    required: "Patient id is required",
                  })}
                />
                {errors.paId && (
                  <div className="text-red-500 mt-2">{errors.paId.message}</div>
                )}
              </div>
              <div className="flex flex-row justify-center items-center mt-2">
                <button className="bg-green-500 text-white p-2 rounded-sm hover:scale-105 ease-in duration-300">
                  Send data
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPatient;
