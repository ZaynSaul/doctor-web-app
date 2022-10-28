import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layouts/Layout";
import Profile from "../../components/Profile";
const Index = () => {
  return (
    <>
      <Layout title="Profile">
        <Breadcrumb icon={faUser} pageName="Profile" />
        <Profile title="Nurse" />
      </Layout>
    </>
  );
};

export default Index;
