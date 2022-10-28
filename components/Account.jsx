import React, { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";
import Left from "./Left";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Account = () => {
  const [showLogin, setLogin] = useState(true);
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-teal-400 md:h-screen md:space-y-4 sm:space-y-4">
        <div>
          <h1 className="text-2xl text-white font-nunito font-extrabold text-center my-4 md:text-4xl md:mb-mb-8">
            Welcome
          </h1>
          <div className="w-full bg-teal-100 flex flex-col justify-center items-center mb-12 md:flex-row ">
            <Left />
            <div>
              {showLogin ? (
                <Login setLogin={setLogin} />
              ) : (
                <Registration setLogin={setLogin} />
              )}
            </div>
          </div>
        </div>
      </div>
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
      />
    </>
  );
};

export default Account;
