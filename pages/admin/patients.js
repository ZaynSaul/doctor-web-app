import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import {
  faDashboard,
  faChevronRight,
  faBedPulse,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layouts/Layout";
import PatientTable from "../../components/Tables/PatientTable";
import axios from "axios";
const Patients = ({ patientLists }) => {
  return (
    <>
      <Layout title="Patients">
        <Breadcrumb icon={faBedPulse} pageName="Patients" />
        <div className="flex flex-col justify-center items-center mt-4">
          <PatientTable patientLists={patientLists} />
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
