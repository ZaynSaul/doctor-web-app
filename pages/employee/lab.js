import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import {
  faDashboard,
  faChevronRight,
  faPrescriptionBottle,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layouts/Layout";
import LabTable from "../../components/Tables/LabTable";
import axios from "axios";
const Lab = ({ labLists }) => {
  return (
    <>
      <Layout title="Laboratory">
        <Breadcrumb icon={faPrescriptionBottle} pageName="Laboratory" />
        <LabTable labLists={labLists} />
      </Layout>
    </>
  );
};

export default Lab;
export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/nurse");
  return {
    props: {
      labLists: res.data,
    },
  };
};
