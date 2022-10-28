import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { getError } from "../../utils/error";
import { toast } from "react-toastify";

import {
  faCalendarPlus,
  faCheckCircle,
  faChild,
  faClose,
  faDiagnoses,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useRouter } from "next/router";
const Edit = ({
  updateId,
  getEditData,
  isEditModalOpen,
  setIsEditModalOpen,
}) => {
  const defaultValues = getEditData;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
  });

  const { query, push } = useRouter();

  const submitHandler = async ({
    name,
    age,
    gender,
    address,
    dob,
    symptoms,
  }) => {
    try {
      await axios
        .put(`/api/patients/${updateId}`, {
          name,
          age,
          gender,
          address,
          dob,
          symptoms,
        })
        .then(() => {
          toast.success("Data update successfully!", {
            position: toast.POSITION.TOP_RIGHT,
            duration: 3000,
          });
        });
      setIsEditModalOpen(false);
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
      className={`flex justify-center items-center bg-black/70 overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 w-full h-screen md:inset-0 h-modal${
        isEditModalOpen ? "block" : "hidden"
      }`}
    >
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex justify-between items-start p-4 rounded-t border-b">
            <h3 className="text-xl font-semibold text-gray-900">
              Update patient
            </h3>
            <button
              onClick={() => setIsEditModalOpen(false)}
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
                      defaultValue={name}
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
                    <FontAwesomeIcon icon={faChild} className="w-20" />
                    <input
                      id="age"
                      type="number"
                      placeholder="Enter age"
                      {...register("age", {
                        required: "Please enter age",
                        type: "number",
                      })}
                      className="w-full h-[38px] border bg-transparent outline-none border-none"
                      autoFocus
                    />
                  </div>
                  {errors.age && (
                    <div className="text-red-500 mt-2">
                      {errors.age.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 mt-4 md:flex-row">
                <div>
                  <div className="flex flex-row justify-center items-center  w-[300px] h-[40px] border border-gray-400 rounded-md">
                    <FontAwesomeIcon icon={faCheckCircle} className="w-20" />
                    <select
                      className="w-full h-[38px] border bg-transparent outline-none border-none"
                      type="text"
                      id="gender"
                      {...register("gender", {
                        required: "Please select an option",
                      })}
                    >
                      <option value="" disabled selected="selected">
                        Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  {errors.gender && (
                    <div className="text-red-500mt-2">
                      {errors.gender.message}
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex flex-row justify-center items-center  w-[300px] h-[40px] border border-gray-400 rounded-md">
                    <FontAwesomeIcon icon={faCalendarPlus} className="w-20" />
                    <input
                      id="dob"
                      type="date"
                      placeholder="Enter date of birth"
                      {...register("dob", {
                        required: "Please enter date of birth",
                      })}
                      className="w-full h-[38px] border bg-transparent outline-none border-none"
                      autoFocus
                    />
                  </div>
                  {errors.dob && (
                    <div className="text-red-500 mt-2">
                      {errors.dob.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 mt-4 md:flex-row">
                <div>
                  <div className="flex flex-row justify-center items-center  w-[300px] h-[40px] border border-gray-400 rounded-md">
                    <FontAwesomeIcon icon={faHome} className="w-20" />
                    <input
                      id="address"
                      type="text"
                      placeholder="Enter Address"
                      {...register("address", {
                        required: "Please enter address",
                      })}
                      className="w-full h-[38px] border bg-transparent outline-none border-none"
                      autoFocus
                    />
                  </div>
                  {errors.address && (
                    <div className="text-red-500">{errors.address.message}</div>
                  )}
                </div>
                <div>
                  <div className="flex flex-row justify-center items-center  w-[300px] h-[40px] border border-gray-400 rounded-md">
                    <FontAwesomeIcon icon={faDiagnoses} className="w-20" />
                    <input
                      id="symptoms"
                      type="multiple"
                      placeholder="Enter symptoms"
                      {...register("symptoms", {
                        required: "Please enter symptoms",
                      })}
                      className="w-full h-[38px] border bg-transparent outline-none border-none"
                      autoFocus
                    />
                  </div>
                  {errors.symptoms && (
                    <div className="text-red-500">
                      {errors.symptoms.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between p-6 space-x-2 rounded-b border-t border-gray-500  mt-4 w-full">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Submit
                </button>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
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

export default Edit;
export const getServerSideProps = async ({ prams }) => {
  const res = await axios.get(
    `http://localhost:3000/api/patients/${prams.updateId}`
  );
  return {
    props: {
      patientLists: res.data,
    },
  };
};
