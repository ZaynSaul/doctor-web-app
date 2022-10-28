import Head from "next/head";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "../Footer";
import Nav from "../Nav";
import Appointment from "../Popups/AddAppointment";

const UserLayout = ({ title, children }) => {
  const [showAppointment, setShowAppointment] = useState();
  return (
    <div>
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
        limit={1}
      />
      <main>
        <Nav
          showAppointment={showAppointment}
          setShowAppointment={setShowAppointment}
        />
        {children}
        <Footer />
        {showAppointment && (
          <Appointment
            hideAppointment={showAppointment}
            setAppointment={setShowAppointment}
          />
        )}
      </main>
    </div>
  );
};

export default UserLayout;
