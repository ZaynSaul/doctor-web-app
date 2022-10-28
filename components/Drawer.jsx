import React, { useState } from "react";

import Logo from "../assets/images/logo.png";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faClose,
  faTh,
  faHome,
  faCalendarAlt,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Appointment from "./Popups/AddAppointment";
import { useSession } from "next-auth/react";
import Logout from "./Logout";
const Drawer = ({ setDrawer, showAppointment, setShowAppointment }) => {
  const [showLogout, setLogout] = useState(false);
  const { status, data: session } = useSession();
  return (
    <div
      className={
        setDrawer
          ? "fixed left-0 top-0 w-full h-screen bg-black/70 z-50 md:hidden"
          : "block"
      }
    >
      <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:h-[45%] h-screen bg-teal-500 p-8 ease-in duration-500">
        <div>
          <div className="flex w-full  flex-row justify-between items-center">
            <div className="flex space-x-2 cursor-pointer">
              <Image className="" src={Logo} alt="Logo" />
              <a href="#" className="font-extrabold text-xl text-white">
                Health
              </a>
            </div>
            <div
              onClick={() => setDrawer(false)}
              className="flex justify-center items-center rounded-full shadow-lg w-[40px] h-[40px] cursor-pointer"
            >
              <FontAwesomeIcon icon={faClose} className="text-2xl text-white" />
            </div>
          </div>
          <div className="text-center border-b border-teal-100 my-4">
            <p className="md:w-[90%] text-md text-teal-100 ">
              Feel better about finding healthcare
            </p>
          </div>
          {/* Navigation Links */}
          <div className="py-4 flex flex-col items-start">
            <ul>
              <Link href="/#">
                <li
                  onClick={() => setDrawer(false)}
                  className="py-4 cursor-pointer"
                >
                  <a className="text-white font-md ">
                    <FontAwesomeIcon icon={faHome} className="mr-2" />
                    Home
                  </a>
                </li>
              </Link>
              <Link href="/#services">
                <li
                  onClick={() => setDrawer(false)}
                  className="py-4 cursor-pointer"
                >
                  <a className="text-white font-md">
                    <FontAwesomeIcon icon={faTh} className="mr-2" />
                    Services
                  </a>
                </li>
              </Link>
              <Link href="/">
                {session?.user ? (
                  <li
                    onClick={() => setDrawer(false) && setShowAppointment(true)}
                    className="py-4 cursor-pointer"
                  >
                    <a className=" text-white font-md relative">
                      <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                      <p className="absolute top-0 right-0 w-[10px] h-[10px] rounded-full bg-orange-500"></p>
                    </a>
                    <span className="text-white">Appointment</span>
                  </li>
                ) : (
                  <li
                    onClick={() => setDrawer(false) && setShowAppointment(true)}
                    className="py-4 cursor-pointer"
                  >
                    <a className=" text-white font-md">
                      <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                      <span>Appointment</span>
                    </a>
                  </li>
                )}
              </Link>
              {session?.user ? (
                <li
                  className="py-4"
                  onClick={() =>
                    (showLogout ? setLogout(false) : setLogout(true)) &&
                    setDrawer(false)
                  }
                >
                  <a className="bg-white px-8  h-10 w-24 text-center flex justify-center items-center rounded-3xl text-teal-500 font-bold cursor-pointer">
                    <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                    Logout
                  </a>
                </li>
              ) : (
                <Link href="/auth/">
                  <li className="py-4">
                    <a className="bg-white px-8  h-10 w-24 text-center flex justify-center items-center rounded-3xl text-teal-500 font-bold cursor-pointer">
                      <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                      Login
                    </a>
                  </li>
                </Link>
              )}
            </ul>
            <div className="flex flex-col pt-12">
              <p className="text-lg font-extrabold text-white">
                LET<span className="border-b-2 border-white">S TALK HAE</span>
                LTH
              </p>
              <div className="flex justify-between items-center gap-4 my-4 w-full mt-6 sm:w-[90%] sm:gap-4 md:gap-8">
                <div className="bg-white flex justify-center items-center w-[40px] h-[40px] rounded-full shadow-lg cursor-pointer hover:scale-105 ease-in duration-300 file:">
                  <FaLinkedin className="text-blue-500 text-2xl" />
                </div>
                <div className="bg-white flex justify-center items-center w-[40px] h-[40px] rounded-full shadow-lg cursor-pointer hover:scale-105 ease-in duration-300 file:">
                  <FaFacebook className="text-blue-500 text-2xl" />
                </div>
                <div className="bg-white flex justify-center items-center w-[40px] h-[40px] rounded-full shadow-lg cursor-pointer hover:scale-105 ease-in duration-300 file:">
                  <FaTwitter className="text-blue-300 text-2xl" />
                </div>
                <div className="bg-white flex justify-center items-center w-[40px] h-[40px] rounded-full shadow-lg cursor-pointer hover:scale-105 ease-in duration-300 file:">
                  <FaWhatsapp className="text-teal-500 text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLogout && <Logout showLogout={showLogout} setLogout={setLogout} />}
    </div>
  );
};

export default Drawer;
