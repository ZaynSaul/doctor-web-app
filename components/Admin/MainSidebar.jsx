import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Router, { useRouter } from "next/router";
import Logo from "../../assets/images/logo.png";
import Image from "next/image";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faUserFriends,
  faBedPulse,
  faUserDoctor,
  faUserCog,
  faUserCheck,
  faUserAlt,
  faPrescriptionBottle,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const MainSidebar = ({ userType }) => {
  return (
    <>
      <motion.div
        animate={{ width: "200px" }}
        className="hidden h-[100vh] fixed left-0 top-0 dark:bg-secondary-dark-bg bg-gray-900 md:block "
      >
        <div className="flex flex-col  md:overflow-hidden overflow-auto md:hover:overflow-auto">
          <div className="mt-2 ml-4 gap-2 flex ">
            <Image className="" src={Logo} alt="Logo" />
            <p className="text-xl text-white font-nunito font-extrabold">
              Health
            </p>
          </div>
          {userType === "admin" ? (
            <>
              <div className="mt-4 ml-4 text-left">
                <p className="text-white font-nunito">ADMIN</p>
              </div>
              <div className="mt-2 border-b border-white"></div>
              <ul className="flex flex-col">
                <Link href="/admin">
                  <li className="py-2 cursor-pointer hover:border-r-4 hover:bg-teal-500/10 hover:border-teal-500 hover:transition-opacity">
                    <a className="text-white flex items-center ml-4">
                      <FontAwesomeIcon
                        icon={faDashboard}
                        className="text-xl mr-4 w-[30px]"
                      />
                      <span>Dashboard</span>
                    </a>
                  </li>
                </Link>
                <Link href="/admin/patients">
                  <li className="py-2 cursor-pointer hover:border-r-4 hover:bg-teal-500/10 hover:border-teal-500 hover:transition-opacity">
                    <a className="text-white flex items-center ml-4">
                      <FontAwesomeIcon
                        icon={faBedPulse}
                        className="text-xl mr-4 w-[30px]"
                      />
                      <span>Patients</span>
                    </a>
                  </li>
                </Link>
                <Link href="/admin/employees">
                  <li className="py-2 cursor-pointer hover:border-r-4 hover:bg-teal-500/10 hover:border-teal-500 hover:transition-opacity">
                    <a className="text-white flex items-center ml-4">
                      <FontAwesomeIcon
                        icon={faUserDoctor}
                        className="text-xl mr-4 w-[30px]"
                      />
                      <span>Employees</span>
                    </a>
                  </li>
                </Link>
                <Link href="/admin/user">
                  <li className="py-2 cursor-pointer hover:border-r-4 hover:bg-teal-500/10 hover:border-teal-500 hover:transition-opacity">
                    <a className="text-white flex items-center ml-4">
                      <FontAwesomeIcon
                        icon={faUserFriends}
                        className="text-xl mr-4 w-[30px]"
                      />
                      <span>Users</span>
                    </a>
                  </li>
                </Link>
              </ul>
              <div className="my-4 ml-4">
                <p className="text-white font-nunito">User Management</p>
              </div>
              <div className=" border-b border-white"></div>
              <ul className="flex flex-col">
                <Link href="/admin/profile">
                  <li className="py-2 cursor-pointer hover:border-r-4 hover:bg-teal-500/10 hover:border-teal-500 hover:transition-opacity">
                    <a className="text-white flex items-center ml-4">
                      <FontAwesomeIcon
                        icon={faUserAlt}
                        className="text-xl mr-4 w-[30px]"
                      />
                      <span>Profile</span>
                    </a>
                  </li>
                </Link>
                <Link href="/admin">
                  <li className="py-2 cursor-pointer hover:border-r-4 hover:bg-teal-500/10 hover:border-teal-500 hover:transition-opacity">
                    <a className="text-white flex items-center ml-4">
                      <FontAwesomeIcon
                        icon={faUserCog}
                        className="text-xl mr-4 w-[30px]"
                      />
                      <span>Permissions</span>
                    </a>
                  </li>
                </Link>
                <li className="py-2 cursor-pointer hover:border-r-4 hover:bg-teal-500/10 hover:border-teal-500 hover:transition-opacity">
                  <a className="text-white flex items-center ml-4">
                    <FontAwesomeIcon
                      icon={faUserCheck}
                      className="text-2xl mr-4 w-[30px]"
                    />
                    <span>Roles</span>
                  </a>
                </li>
              </ul>
            </>
          ) : (
            <>
              <div className="mt-4 ml-4">
                <p className="text-white font-nunito">NURSE</p>
              </div>
              <div className=" border-b border-white"></div>
              <ul className="flex flex-col">
                <li className="py-2 cursor-pointer hover:bg-teal-500/10 hover:border-r-4 hover:border-teal-500 hover:transition-opacity">
                  <Link href="/employee">
                    <a className="text-white flex items-center ml-4">
                      <FontAwesomeIcon
                        icon={faDashboard}
                        className="text-xl mr-4 w-[30px]"
                      />
                      <span>Dashboard</span>
                    </a>
                  </Link>
                </li>
                <li className="py-2 cursor-pointer hover:bg-teal-500/10 hover:border-r-4 hover:border-teal-500 hover:transition-opacity">
                  <Link href="/admin/patients">
                    <a className="text-white flex items-center ml-4">
                      <FontAwesomeIcon
                        icon={faBedPulse}
                        className="text-xl mr-4 w-[30px]"
                      />
                      <span>Patients</span>
                    </a>
                  </Link>
                </li>
                <li className="py-2 cursor-pointer hover:bg-teal-500/10 hover:border-r-4 hover:border-teal-500 hover:transition-opacity">
                  <Link href="/employee/lab">
                    <a className="text-white flex items-center ml-4">
                      <FontAwesomeIcon
                        icon={faPrescriptionBottle}
                        className="text-xl mr-4 w-[30px]"
                      />
                      <span>Laboratory</span>
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="my-4 ml-4">
                <p className="text-white font-nunito">Settings</p>
              </div>
              <div className=" border-b border-white"></div>
              <ul className="flex flex-col">
                <li className="py-2 cursor-pointer hover:bg-teal-500/10 hover:border-r-4 hover:border-teal-500 hover:transition-opacity ">
                  <Link href="/employee/profile">
                    <a className="text-white flex items-center ml-4">
                      <FontAwesomeIcon
                        icon={faUserAlt}
                        className="text-xl mr-4 w-[30px]"
                      />
                      <span>Profile</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default MainSidebar;
