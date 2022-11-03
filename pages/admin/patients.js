import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import {
  faDashboard,
  faChevronRight,
  faBedPulse,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layouts/Layout";
import PatientTable from "../../components/Tables/PatientTable";
import axios from "axios";
import Pagination from "../../components/Pagination";
const Patients = ({ patientLists }) => {
  const [patients, setPatients] = useState(patientLists);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);

  const indexOfLastPage = currentPage * itemPerPage;
  const indexOfFirstPage = indexOfLastPage - itemPerPage;
  const currentData = patients.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (number) => setCurrentPage(number);
  return (
    <>
      <Layout title="Patients">
        <Breadcrumb icon={faBedPulse} pageName="Patients" />
        <div className="flex flex-col justify-center items-center mt-4">
          <PatientTable
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            paginate={paginate}
            postPerPage={itemPerPage}
            totalPosts={patients.length}
            patientLists={currentData}
          />
        </div>
      </Layout>
    </>
  );
};

export default Patients;

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/patients");
  return {
    props: {
      patientLists: res.data,
    },
  };
};
