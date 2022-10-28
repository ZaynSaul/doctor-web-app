import React from "react";
import Stats from "../../components/Admin/Stats";
import Charts from "../../components/Admin/Charts";
import Breadcrumb from "../../components/Breadcrumb";
import { faDashboard, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layouts/Layout";
const Dashboard = () => {
  return (
    <>
      <Layout title="Dashboard">
        <Breadcrumb icon={faDashboard} pageName="Dashboard" />

        <Stats />
        <div className="py-6">
          <Charts />
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
