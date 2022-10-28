import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layouts/Layout";
import EmployeeTable from "../../components/Tables/EmployeeTable";
import axios from "axios";
const Employee = ({ userLists }) => {
  return (
    <>
      <Layout title="Employee">
        <Breadcrumb icon={faUserNurse} pageName="Employee" />
        <div className="flex flex-col justify-center items-center mt-4">
          <EmployeeTable userLists={userLists} />
        </div>
      </Layout>
    </>
  );
};

export default Employee;
export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/users/employee");
  return {
    props: {
      userLists: res.data,
    },
  };
};
