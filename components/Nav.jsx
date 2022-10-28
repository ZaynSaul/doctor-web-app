import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import Image from "next/image";
import Logout from "./Logout";
import Profile from "../assets/images/profile.png";
import { signOut, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTh,
  faHome,
  faCalendarAlt,
  faSignInAlt,
  faBars,
  faChevronDown,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Drawer from "./Drawer";

const Nav = ({ showAppointment, setShowAppointment }) => {
  const [showDrawer, setDrawer] = useState(false);
  const [color, setColor] = useState(false);
  const [showLogout, setLogout] = useState(false);
  const { status, data: session } = useSession();

  // const[]
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.addEventListener("scroll", changeColor);
  });
  const logoutClickHandler = () => {
    signOut({ callbackUrl: "http://localhost:3000/auth" }).then(() => {
      toast.success("Logging out!", {
        position: toast.POSITION.TOP_RIGHT,
        duration: 3000,
      });
    });
  };

  return (
    <>
      <header
        className={`w-full flex justify-between items-center mx-auto p-6 md:w-full font-nunito
        ${color ? "fixed top-0 z-50  bg-black/60" : " bg-[#ccfbf1]"}`}
      >
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex space-x-2 cursor-pointer"
        >
          <Image className="" src={Logo} alt="Logo" />
          <a
            href="#"
            className={`font-extrabold text-xl
            ${color ? " text-white " : " text-teal-500 "}`}
          >
            Health
          </a>
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.2,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="hidden space-x-6 ml-auto justify-center items-center md:flex md:mr-20"
        >
          <Link href="/#">
            <a
              className={` font-md pb-2 hover:border-b-4 border-teal-500  cursor-pointer transition-all ${
                color ? "text-white" : "text-teal-500"
              }`}
            >
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </a>
          </Link>
          <Link href="/#services">
            <a
              className={` font-md pb-2 hover:border-b-4 border-teal-500  cursor-pointer transition-all ${
                color ? "text-white" : "text-teal-500"
              }`}
            >
              <FontAwesomeIcon icon={faTh} className="mr-2" />
              Service
            </a>
          </Link>
          {session?.user.uType === "user" ? (
            <Link href="/appointment">
              <a
                className={` relative font-md ${
                  color ? "text-white" : "text-teal-500"
                }`}
              >
                <FontAwesomeIcon icon={faCalendar} className="mr-2" />

                <p className="absolute top-0 right-0 w-[10px] h-[10px] rounded-full bg-orange-500"></p>
              </a>
            </Link>
          ) : (
            <button
              onClick={() => setShowAppointment(true)}
              className={` font-md pb-2 hover:border-b-4 border-teal-500  cursor-pointer transition-all ${
                color ? "text-white" : "text-teal-500"
              }`}
            >
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              <span>Appointment</span>
            </button>
          )}
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="hidden ml-auto md:ml-0 md:block"
        >
          {session?.user.uType === "user" ? (
            <div
              className="flex flex-row items-center gap-2 cursor-pointer"
              onClick={() => (showLogout ? setLogout(false) : setLogout(true))}
            >
              <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full border border-slate-400">
                <Image
                  src={Profile}
                  alt="profile"
                  width="40px"
                  height="40px"
                  className="rounded-full"
                />
              </div>
              <p className="text-md">{session?.user.name}</p>
              <div className="">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className=" text-md text-gray-400"
                />
              </div>
              {showLogout && (
                <Logout showLogout={showLogout} setLogout={setLogout} />
              )}
            </div>
          ) : (
            <Link href="/auth/">
              <a className="bg-teal-500 px-8  h-10 w-24 text-center flex justify-center items-center rounded-3xl text-white font-bold cursor-pointer hover:bg-teal-100 hover:border border-teal-500 hover:text-teal-500">
                <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                Login
              </a>
            </Link>
          )}
        </motion.div>
        <div
          onClick={() => setDrawer(true)}
          className="block hover:cursor-pointer ml-4 md:hidden "
        >
          <FontAwesomeIcon
            icon={faBars}
            className="mr-2 text-xl text-teal-500 font-bold"
          />
        </div>
        {showDrawer && (
          <Drawer
            setDrawer={setDrawer}
            showAppointment={showAppointment}
            setShowAppointment={setShowAppointment}
          />
        )}
      </header>
    </>
  );
};

export default Nav;
export const getServerSideProps = async () => {
  const res = await axios.get(
    "http://localhost:3000/api/appointment/" + session?.user._d
  );
  return {
    props: {
      appointment: res.data,
    },
  };
};
