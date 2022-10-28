import React, { useState } from "react";
import Left from "../Left";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const Account = ({ title, children }) => {
  const [showLogin, setLogin] = useState(true);
  return (
    <>
      <Head>
        <title>{title ? "Clinic -" + title : "Home"}</title>
        <meta name="description" content="Clinic Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="w-full h-screen flex justify-center items-center bg-teal-500 md:h-screen md:space-y-4 sm:space-y-4">
        <div className="relative">
          <h1 className="text-2xl text-white font-nunito font-extrabold text-center my-4 md:text-2xl md:mb-8">
            Welcome
          </h1>
          <div className="  w-full bg-teal-100 flex flex-col justify-center items-center mb-12 md:flex-row ">
            <Left />
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
