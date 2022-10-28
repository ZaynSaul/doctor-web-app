import React from "react";

import Logo from "../../assets/images/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faClose,
  faBedPulse,
  faUserFriends,
  faDashboard,
  faUserNurse,
  faUser,
  faPrescriptionBottle,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const MobileSidebar = ({ setMobileSidebar, userType }) => {
  return (
    <div
      className={`fixed left-0 top-0 w-full h-screen bg-black/70 z-50 cursor-pointer
        ${setMobileSidebar ? "md:hidden" : "block"}`}
    >
      <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:h-[45%] h-screen bg-gray-800 md:bg-teal-500 p-8 ease-in duration-500">
        <div className="flex w-full  flex-row justify-between items-center">
          <div className="flex space-x-2 cursor-pointer">
            <Image className="" src={Logo} alt="Logo" />
            <a href="#" className="font-extrabold text-xl text-white">
              Health
            </a>
          </div>
          <div
            onClick={() => setMobileSidebar(false)}
            className="flex justify-center items-center rounded-full shadow-lg w-[40px] h-[40px] cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faClose}
              className="text-2xl text-gray-500"
            />
          </div>
        </div>
        {userType === "admin" ? (
          <>
            <div className="mt-6">
              <p className="text-gray-200 font-nunito">Admin</p>
            </div>
            <ul className="flex flex-col">
              <Link href="/admin">
                <li
                  onClick={() => setMobileSidebar(false)}
                  className="my-2 cursor-pointer"
                >
                  <a href="#" className="text-white flex items-center">
                    <FontAwesomeIcon
                      icon={faDashboard}
                      className="text-xl mr-4 w-[30px]"
                    />
                    <span>Dashboard</span>
                  </a>
                </li>
              </Link>
              <Link href="/admin/patients">
                <li
                  onClick={() => setMobileSidebar(false)}
                  className="my-2 cursor-pointer"
                >
                  <a className="text-white flex items-center">
                    <FontAwesomeIcon
                      icon={faBedPulse}
                      className="text-xl mr-4 w-[30px]"
                    />
                    <span>Patients</span>
                  </a>
                </li>
              </Link>
              <li
                onClick={() => setMobileSidebar(false)}
                className="my-2 cursor-pointer"
              >
                <a className="text-white flex items-center">
                  <FontAwesomeIcon
                    icon={faUserNurse}
                    className="text-xl mr-4 w-[30px]"
                  />
                  <span>Nurses</span>
                </a>
              </li>
              <li
                onClick={() => setMobileSidebar(false)}
                className="my-2 cursor-pointer"
              >
                <a className="text-white flex items-center">
                  <FontAwesomeIcon
                    icon={faUserFriends}
                    className="text-lx mr-4 w-[30px]"
                  />
                  <span>Users</span>
                </a>
              </li>
            </ul>
          </>
        ) : (
          <>
            <div className="mt-6">
              <p className="text-gray-200 font-nunito">NURSE</p>
            </div>
            <ul className="flex flex-col">
              <Link href="/employee">
                <li
                  onClick={() => setMobileSidebar(false)}
                  className="my-2 cursor-pointer"
                >
                  <a href="#" className="text-white flex items-center">
                    <FontAwesomeIcon
                      icon={faDashboard}
                      className="text-xl mr-4 w-[30px]"
                    />
                    <span>Dashboard</span>
                  </a>
                </li>
              </Link>
              <Link href="/admin/patients">
                <li
                  onClick={() => setMobileSidebar(false)}
                  className="my-2 cursor-pointer"
                >
                  <a className="text-white flex items-center">
                    <FontAwesomeIcon
                      icon={faBedPulse}
                      className="text-xl mr-4 w-[30px]"
                    />
                    <span>Patients</span>
                  </a>
                </li>
              </Link>
              <Link href="/employee/lab">
                <li
                  onClick={() => setMobileSidebar(false)}
                  className="my-2 cursor-pointer"
                >
                  <a className="text-white flex items-center">
                    <FontAwesomeIcon
                      icon={faPrescriptionBottle}
                      className="text-xl mr-4 w-[30px]"
                    />
                    <span>Laboratory</span>
                  </a>
                </li>
              </Link>
              <Link href="/employee/profile">
                <li
                  onClick={() => setMobileSidebar(false)}
                  className="my-2 cursor-pointer"
                >
                  <a className="text-white flex items-center">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-lx mr-4 w-[30px]"
                    />
                    <span>Profile</span>
                  </a>
                </li>
              </Link>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileSidebar;
