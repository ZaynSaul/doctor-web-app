import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Layout from "../../components/Layouts/Layout";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import AppointmentTable from "../../components/Tables/AppointmentTable";
function appointment({ appLists }) {
  return (
    <Layout title="Appointment">
      <Breadcrumb icon={faCalendarDay} pageName="Appointments" />
      <AppointmentTable appLists={appLists} />
    </Layout>
  );
}

export default appointment;
export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/appointment");
  return {
    props: {
      appLists: res.data,
    },
  };
};
