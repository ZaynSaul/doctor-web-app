import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEdit,
  faTrashAlt,
  faSearch,
  faCheckCircle,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import Delete from "../Popups/Delete";
import ViewAppointment from "../Popups/ViewAppointment";

const AppointmentTable = ({ appLists }) => {
  const [appData, setAppLists] = useState(appLists);
  const [isDeleting, setIsDeleting] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [viewAppointment, setViewAppointment] = useState(false);
  const [getAppointment, setAppointment] = useState(null);

  const appId = useRef();
  const handleViewAppointment = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/appointment/${id}`);
    setAppointment(res.data);
    setViewAppointment(true);
  };
  const handleStatus = async (id) => {
    const a = appData.filter((ap) => ap._id === id)[0];
    const status = a.status;
    try {
      if (status === 1) {
        const res = await axios.put(
          "http://localhost:3000/api/appointment/" + id,
          {
            $set: {
              status: status - 1,
            },
          }
        );
        setAppLists([res.data, ...appData.filter((ap) => ap._id !== id)]);
      }
      if (status === 0) {
        const res = await axios.put(
          "http://localhost:3000/api/appointment/" + id,
          {
            $set: {
              status: status + 1,
            },
          }
        );
        setAppLists([res.data, ...appData.filter((ap) => ap._id !== id)]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    setIsDeleting(id);
    setConfirm(true);
    appId.current = id;
  };

  const closePopup = () => {
    setConfirm(false);
  };

  const deleteData = async () => {
    try {
      await axios
        .delete("http://localhost:3000/api/appointment/" + appId.current)
        .then(() => {
          toast.success("Data deleted successfully", {
            position: toast.POSITION.TOP_RIGHT,
            duration: 2000,
          });
        });
      setUserLists(appData.filter((ap) => ap._id !== isDeleting));
    } catch (err) {
      console.log(err);
    }
    setConfirm(false);
  };

  return (
    <div className="w-full bg-white overflow-x-auto relative shadow-sm mt-4 border border-gray-100 sm:rounded-lg">
      <div className="w-full flex fel-row items-center justify-between p-2">
        <h3 className="text-gray-500">Appointments Table</h3>
        <div className="w-[300px] h-[40px] flex flex-row items-center gap-4 border border-gray-300 rounded-md">
          <a className="cursor-pointer">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-lg text-teal-500 w-10 h-10"
            />
          </a>
          <input
            type="text"
            className="bg-transparent outline-none border-none w-full h-[35]"
            placeholder="search"
          />
        </div>
      </div>
      <table className="w-full h-1/2 text-sm text-left text-gray-500">
        <thead className="text-xs  uppercase bg-gray-50  dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="py-3 px-6">
              Full Name
            </th>
            <th scope="col" className="py-3 px-6">
              Address
            </th>
            <th scope="col" className="py-3 px-6">
              Email
            </th>
            <th scope="col" className="py-3 px-6">
              Phone
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {appData &&
            appData.map((a) => (
              <tr
                className="bg-white border-b border-gray-300 hover:bg-gray-300 "
                key={a._id}
              >
                <td className="p-4 w-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-table-search-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-500 whitespace-nowrap "
                >
                  {a.name}
                </th>
                <td className="py-4 px-6">{a.address}</td>
                <td className="py-4 px-6">{a.email}</td>
                <td className="py-4 px-6">{a.phone}</td>
                <td className="py-4 px-6">
                  {a.status === 0 ? (
                    <span className="bg-green-500 p-2 rounded-md text-white font-bold">
                      Consult
                    </span>
                  ) : (
                    <span className="bg-blue-500 p-2 rounded-md text-white font-bold">
                      Revisit
                    </span>
                  )}
                </td>
                <td className="py-4 px-6 flex justify-start items-center gap-2">
                  <a
                    onClick={() => handleStatus(a._id)}
                    className="font-medium text-blue-600 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FontAwesomeIcon icon={faCheckCircle} className="text-xl" />
                  </a>
                  <a
                    onClick={() => handleViewAppointment(a._id)}
                    className="font-medium text-gray-500 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FontAwesomeIcon icon={faEye} className="text-xl" />
                  </a>
                  <a
                    onClick={() => handleDelete(a._id)}
                    className="font-medium cursor-pointer text-red-600 hover:underline"
                  >
                    <FontAwesomeIcon icon={faTrashAlt} className="text-xl" />
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <nav
        className="flex justify-between items-center p-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-500 ">1-10</span> of{" "}
          <span className="font-semibold text-gray-500 ">1000</span>
        </span>
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <a
              href="#"
              className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700   dark:text-gray-400 "
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700   dark:text-gray-400 "
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700   dark:text-gray-400 "
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="z-10 py-2 px-3 leading-tight text-gray-100 border border-blue-300 hover:bg-white   bg-gray-300 "
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700   dark:text-gray-400 "
            >
              ...
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700   dark:text-gray-400 "
            >
              100
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700   dark:text-gray-400 "
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      {viewAppointment && (
        <ViewAppointment
          getAppointment={getAppointment}
          viewAppointment={viewAppointment}
          setViewAppointment={setViewAppointment}
        />
      )}
      {isDeleting && (
        <Delete
          deleteConfirmation={deleteData}
          confirm={confirm}
          closePopup={closePopup}
        />
      )}
    </div>
  );
};

export default AppointmentTable;
