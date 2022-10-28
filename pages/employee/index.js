import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { faDashboard, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layouts/Layout";
const Nurse = () => {
  return (
    <>
      <Layout title="Dashboard">
        <Breadcrumb icon={faDashboard} pageName="Nurse Dashboard" />
      </Layout>
    </>
  );
};

export default Nurse;
