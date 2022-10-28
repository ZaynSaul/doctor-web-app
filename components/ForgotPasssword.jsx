import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

const ForgotPasswordComponent = ({ setLogin }) => {
  return (
    <div className="w-full h-1/2 p-6">
      <form>
        <div className="text-lg text-teal-500 font-nunito font-medium text-center my-6">
          A verification code will be sent to through your email
        </div>
        <div
          className="w-[400px] h-[50px] border-2 border-teal-500 flex justify-start items-center rounded-md
        mb-4"
        >
          <FontAwesomeIcon
            icon={faEnvelopeOpen}
            className="mr-2 text-xl text-teal-500 ml-4"
          />
          <input
            type="email"
            className="w-full h-[40px] bg-transparent outline-none text-xl font-nunito"
            placeholder="Enter your mail"
          />
        </div>
        <div>
          <button className="w-full flex justify-center  bg-teal-500 text-white hover:bg-white/90 hover:text-teal-600 shadow-lg font-bold rounded-md text-lg px-5 py-2.5 text-center font-nunito items-center">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordComponent;
