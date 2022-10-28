import Head from "next/head";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HeadComponent = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title ? "Clinic -" + title : "Home"}</title>
        <meta name="description" content="Clinic Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={1}
      />
    </>
  );
};

export default HeadComponent;
