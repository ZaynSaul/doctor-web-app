import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import {
  faDashboard,
  faChevronRight,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layouts/Layout";
import UserTable from "../../components/Tables/UserTable";
import axios from "axios";
export default function Users({ userLists }) {
  return (
    <>
      <Layout title="Users">
        <Breadcrumb icon={faUserGroup} pageName="View Users" />
        <div className="flex flex-col justify-center items-center mt-4">
          <UserTable userLists={userLists} />
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/users");
  return {
    props: {
      userLists: res.data,
    },
  };
};
