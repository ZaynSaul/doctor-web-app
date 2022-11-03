import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEdit,
  faTrashAlt,
  faSearch,
  faAdd,
  faCheckCircle,
  faClose,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Delete from "../Popups/Delete";
import axios from "axios";
import { toast } from "react-toastify";
import AddPatient from "../Popups/AddPatient";
import Edit from "../Popups/EditPatient";
import ViewPatient from "../Popups/ViewPatient";
import Pagination from "../Pagination";
import { Tooltip } from "@material-tailwind/react";

const PatientTable = ({ paginate, postPerPage, totalPosts, patientLists }) => {
  const [patientData, setPatientLists] = useState(patientLists);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [getId, setId] = useState("");
  const [getEditData, setEditData] = useState(null);
  const [isOpenViewModal, setIsOpenViewModal] = useState(false);
  const [getViewPatient, setViewPatient] = useState(null);

  useEffect(() => {});

  const paId = useRef();

  const handleView = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/patients/${id}`);
    setViewPatient(res.data);
    setIsOpenViewModal(true);
  };

  const handleStatus = async (id) => {
    const patient = await patientData.filter((pa) => pa._id === id)[0];
    const status = await patient.isRecovered;
    try {
      if (status === 1) {
        const res = await axios.put(
          "http://localhost:3000/api/patients/" + id,
          {
            $set: {
              isRecovered: status - 1,
            },
          }
        );
        setPatientLists([
          res.data,
          ...patientData.filter((pa) => pa._id !== id),
        ]);
      }
      if (status === 0) {
        const res = await axios.put(
          "http://localhost:3000/api/patients/" + id,
          {
            $set: {
              isRecovered: status + 1,
            },
          }
        );
        setPatientLists([
          res.data,
          ...patientData.filter((pa) => pa._id !== id),
        ]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/patients/${id}`);

    setIsEditModalOpen(true);
    setEditData(res.data);
    setId(id);
    console.log(getEditData);
  };

  const handleDelete = async (id) => {
    setIsDeleting(id);
    setConfirm(true);
    paId.current = id;
  };

  const closePopup = () => {
    setConfirm(false);
  };

  const deleteData = async () => {
    try {
      await axios
        .delete("http://localhost:3000/api/patients/" + paId.current)
        .then(() => {
          toast.success("Data deleted successfully", {
            position: toast.POSITION.TOP_RIGHT,
            duration: 2000,
          });
        });
      setPatientLists(patientData.filter((pa) => pa._id !== isDeleting));
    } catch (err) {
      console.log(err);
    }
    setConfirm(false);
  };

  return (
    <div className="w-full bg-white overflow-x-auto relative shadow-sm border border-gray-100 mb-8 sm:rounded-lg">
      <div className="w-full flex fel-row items-center justify-between p-2">
        <h3 className="text-gray-500">Patients Table</h3>
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
        <Tooltip content="Add">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-[100px] h-[40px] bg-green-500 text-white flex justify-center items-center rounded-md p-2"
            type="button"
            data-modal-toggle="defaultModal"
          >
            <FontAwesomeIcon icon={faAdd} />
            Add
          </button>
        </Tooltip>
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
              Age
            </th>
            <th scope="col" className="py-3 px-6">
              Gender
            </th>
            <th scope="col" className="py-3 px-6">
              Address
            </th>
            <th scope="col" className="py-3 px-6">
              DOB
            </th>
            <th scope="col" className="py-3 px-6">
              Symptoms
            </th>
            <th scope="col" className="py-3 px-6">
              Recovered
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {patientData &&
            patientData.map((pa) => (
              <tr
                className="bg-white border-b border-gray-300 hover:bg-gray-300 "
                key={pa._id}
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
                  {pa.name}
                </th>
                <td className="">{pa.age}</td>
                <td className="">{pa.gender}</td>
                <td className="">{pa.address}</td>
                <td className="">{new Date(pa.dob).toLocaleDateString()}</td>
                <td className="py-4 px-6">{pa.symptoms}</td>
                <td className="text-center">
                  {pa.isRecovered === 0 ? (
                    <FontAwesomeIcon
                      icon={faClose}
                      className="text-xl text-red-400"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-xl text-green-400"
                    />
                  )}
                </td>

                <td className=" flex justify-center items-center gap-2   text-center py-2 px-2">
                  <Tooltip content="Update Status">
                    <a
                      onClick={() => handleStatus(pa._id)}
                      className="font-medium text-blue-600 cursor-pointer hover:scale-105 ease-in duration-300"
                    >
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-md"
                      />
                    </a>
                  </Tooltip>
                  <Tooltip content="Edit">
                    <a
                      onClick={() => handleUpdate(pa._id)}
                      className="font-medium text-blue-600 cursor-pointer hover:scale-105 ease-in duration-300"
                    >
                      <FontAwesomeIcon icon={faEdit} className="text-md" />
                    </a>
                  </Tooltip>
                  <Tooltip content="View">
                    <a
                      onClick={() => handleView(pa._id)}
                      className="font-medium text-gray-600 cursor-pointer hover:scale-105 ease-in duration-300"
                    >
                      <FontAwesomeIcon icon={faEye} className="text-md" />
                    </a>
                  </Tooltip>
                  <Tooltip content="Delete">
                    <a
                      onClick={() => handleDelete(pa._id)}
                      className="font-medium cursor-pointer text-red-600 hover:scale-105 ease-in duration-300"
                    >
                      <FontAwesomeIcon icon={faTrashAlt} className="text-md" />
                    </a>
                  </Tooltip>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
      />

      {isModalOpen && (
        <AddPatient isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}

      {isOpenViewModal && (
        <ViewPatient
          viewData={getViewPatient}
          isOpenViewModal={isOpenViewModal}
          setIsOpenViewModal={setIsOpenViewModal}
        />
      )}

      {isEditModalOpen && (
        <Edit
          updateId={getId}
          getEditData={getEditData}
          isEditModalOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
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

export default PatientTable;
