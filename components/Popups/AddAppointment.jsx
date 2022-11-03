import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { getError } from "../../utils/error";
import { toast } from "react-toastify";

import {
  faClose,
  faEnvelope,
  faHome,
  faPhoneAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const Appointment = ({ hideAppointment, setAppointment }) => {
  const [value, setValue] = useState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ name, address, email, phone }) => {
    try {
      await axios
        .post("/api/appointment", {
          name,
          address,
          email,
          phone,
        })
        .then(() => {
          toast.success("Data created successfully!", {
            position: toast.POSITION.TOP_RIGHT,
            duration: 3000,
          });
        });
      setAppointment(false);
    } catch (err) {
      toast.error(getError(err), {
        position: toast.POSITION.TOP_RIGHT,
        duration: 3000,
      });
    }
  };
  return (
    <div
      aria-hidden="true"
      className={`flex justify-center items-center bg-black/70 overflow-y-auto overflow-x-hidden fixed top-0 z-50 w-full h-screen md:inset-0 h-modal md:h-screen ${
        hideAppointment ? "block" : "hidden"
      }`}
    >
      <div className="relative p-4 w-full max-w-2xl h-screen md:h-auto">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex justify-between items-start p-4 rounded-t border-b">
            <h3 className="text-xl font-semibold text-gray-900">
              Add Appointment
            </h3>
            <button
              onClick={() => setAppointment(false)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-500  text-sm w-10 h-10 rounded-full ml-auto flex justify-center items-center "
              data-modal-toggle="defaultModal"
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>

          <div className="p-6 space-y-6">
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                <div>
                  <div className="flex flex-row justify-center items-center  w-[300px] h-[40px] border border-gray-400 rounded-md">
                    <FontAwesomeIcon icon={faUser} className="w-20" />
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter name"
                      {...register("name", {
                        required: "Please enter patient name",
                      })}
                      className="w-full h-[38px] border bg-transparent outline-none border-none"
                      autoFocus
                    />
                  </div>
                  {errors.name && (
                    <div className="text-red-500 mt-2">
                      {errors.name.message}
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex flex-row justify-center items-center  w-[300px] h-[40px] border border-gray-400 rounded-md">
                    <FontAwesomeIcon icon={faHome} className="w-20" />
                    <input
                      id="address"
                      type="text"
                      placeholder="Enter address"
                      {...register("address", {
                        required: "Please enter address",
                      })}
                      className="w-full h-[38px] border bg-transparent outline-none border-none"
                      autoFocus
                    />
                  </div>
                  {errors.address && (
                    <div className="text-red-500 mt-2">
                      {errors.address.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 mt-4 md:flex-row ">
                <div>
                  <div className="flex flex-row justify-center items-center  w-[300px] h-[40px] border border-gray-400 rounded-md">
                    <FontAwesomeIcon icon={faEnvelope} className="w-20" />
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter email"
                      className="w-full h-[38px] border bg-transparent outline-none border-none"
                      autoFocus
                      {...register("email", {
                        required: "Please enter email",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                          message: "Please enter a valid email",
                        },
                      })}
                    />
                  </div>
                  {errors.email && (
                    <div className="text-red-500">{errors.email.message}</div>
                  )}
                </div>
                <div>
                  <div className="flex flex-row justify-center items-center  w-[300px] h-[40px] border border-gray-400 rounded-md">
                    <FontAwesomeIcon icon={faPhoneAlt} className="w-20" />
                    <input
                      id="phone"
                      type="text"
                      placeholder="Enter phone number"
                      {...register("phone", {
                        required: "Please enter symptoms",
                      })}
                      className="w-full h-[38px] border bg-transparent outline-none border-none"
                      autoFocus
                    />
                  </div>
                  {errors.phone && (
                    <div className="text-red-500">{errors.phone.message}</div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between p-6 space-x-2 rounded-b border-t border-gray-500  mt-4 w-full">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Submit
                </button>
                <button
                  onClick={() => setAppointment(false)}
                  type="button"
                  className="text-white bg-red-500 hover:text-red-500  hover:border hover:border-red-500  rounded-lg text-sm font-medium px-5 py-2.5 "
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
