import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import HeroImg from "../assets/images/doctor.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMapLocation,
  faHeadphonesAlt,
  faUserMd,
} from "@fortawesome/free-solid-svg-icons";
import Circular from "./Circular";
import Appointment from "./Popups/AddAppointment";

const Hero = ({ showAppointment, setShowAppointment }) => {
  const [text, count] = useTypewriter({
    words: ["Your are welcome.", "Your health!", "Is our top priority"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      id="home"
      className="w-full bg-[#ccfbf1] flex flex-col-reverse justify-around  items-center px-6 mx-auto space-y-8 md:flex-row md:w-full md:h-screen"
    >
      <div className="relative w-[250px] flex flex-col items-center space-y-8 text-center mb-8 md:w-[450px] md:mb-0">
        <div className="max-w-md text-teal-500 text-2xl font-extrabold sm:text-2xl md:text-center md:text-4xl">
          <h1 className="font-nunito">Hi, I am Dr Durin</h1>
          <span className="font-nunito text-red-400">{text}</span>
          <Cursor cursorColor="#18A3C3" />
        </div>
        <div className="relative flex flex-col justify-center items-center text-center mt-6">
          <button
            type="button"
            className="w-60 text-teal-600 bg-white  font-medium shadow-lg text-md px-5 py-2.5 text-center flex justify-start items-center font-nunito mr-2 mb-2 hover:scale-105 ease-in-out duration-300"
          >
            <FontAwesomeIcon icon={faMapLocation} className="mr-2" />
            Bundung, Serrekunda
          </button>
          <button
            type="button"
            className="w-60 text-teal-600 bg-white  font-medium shadow-lg  text-md px-5 py-2.5 text-center flex justify-start items-center font-nunito mr-2 mb-2 hover:scale-105 ease-in-out duration-300"
          >
            <FontAwesomeIcon icon={faHeadphonesAlt} className="mr-2" />
            Free Support
          </button>
          <button
            type="button"
            className="w-60 text-teal-600 bg-white  shadow-lg font-medium  text-md px-5 py-2.5 text-center flex justify-start items-center font-nunito mr-2 mb-2 hover:scale-105 ease-in-out duration-300"
          >
            <FontAwesomeIcon icon={faUserMd} className="mr-2" />
            Online care
          </button>
          <button
            onClick={() => setShowAppointment(true)}
            className="w-60 mt-6 flex justify-center  bg-teal-500 text-white hover:bg-white/90 hover:text-teal-600 shadow-lg font-bold rounded-lg text-lg px-5 py-2.5 text-center font-nunito items-center  mr-2 mb-2"
          >
            Book Now
          </button>
          <div className=" flex flex-row justify-between mt-6 md:mb-6 sm:mb-4">
            <div className="mr-4 flex flex-col justify-center items-center font-sm text-teal-500">
              <div className="w-16 h-10 rounded-md shadow-lg bg-teal-500 text-center text-white flex flex-col justify-center items-center">
                <h3>+23k</h3>
              </div>
              Recovery
            </div>
            <div className="mr-4 flex flex-col justify-center items-center font-sm text-teal-500">
              <div className=" w-16 h-10 rounded-md shadow-lg bg-teal-500 text-center text-white flex flex-col justify-center items-center">
                <h3>93%</h3>
              </div>
              Impact
            </div>
            <div className="mr-4 flex flex-col justify-center items-center text-center font-sm text-teal-500">
              <div className="w-16 h-10 rounded-md shadow-lg bg-teal-500 text-center text-white flex flex-row justify-center items-center">
                <FontAwesomeIcon icon={faUserMd} className="mr-2" />
                <h3>8</h3>
              </div>
              Doctors
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Circular />
        <Image
          className="object-fill z-30"
          src={HeroImg}
          alt="hero"
          width="350px"
          height="400px"
          objectFit="fill"
        />
      </div>
      {showAppointment && (
        <Appointment
          hideAppointment={showAppointment}
          setAppointment={setShowAppointment}
        />
      )}
    </div>
  );
};

export default Hero;
