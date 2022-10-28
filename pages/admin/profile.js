import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Layout from "../../components/Layouts/Layout";
import { faUser, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Profile from "../../components/Profile";

const Index = () => {
  return (
    <>
      <Layout title="Profile">
        <Breadcrumb icon={faUser} pageName="Profile" />
        <Profile title="Admin" />
      </Layout>
    </>
  );
};

export default Index;
