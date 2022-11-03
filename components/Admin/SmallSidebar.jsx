import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faUserFriends,
  faUserMd,
  faPrescription,
  faHospitalUser,
  faBedPulse,
  faUserNurse,
  faUserCog,
  faUserCheck,
  faPrescriptionBottle,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/logo.png";
import Image from "next/image";
import { motion } from "framer-motion";

import Link from "next/link";
import { Tooltip } from "@material-tailwind/react";

const SmallSidebar = ({ userType }) => {
  return (
    <>
      <motion.div
        animate={{ width: "50px" }}
        className="hidden h-screen fixed left-0 top-0  bg-gray-900  md:block"
      >
        <div className="flex flex-col ">
          <div className="mt-2 ml-2">
            <Image className="" src={Logo} alt="Logo" />
          </div>

          <div className="mt-2 border-b border-white"></div>
          {userType === "admin" ? (
            <>
              <ul className="mt-4">
                <li className="py-2 cursor-pointer hover:border-r-4 hover:bg-teal-500/10 hover:border-teal-500 hover:transition-opacity">
                  <Link href="/admin">
                    <Tooltip content="Dashboard">
                      <a className="ml-2">
                        <FontAwesomeIcon
                          icon={faDashboard}
                          className="text-xl text-white"
                        />
                      </a>
                    </Tooltip>
                  </Link>
                </li>
                <li className="py-2 cursor-pointer hover:border-r-4 hover:bg-teal-500/10 hover:border-teal-500 hover:transition-opacity">
                  <Link href="/admin/patients">
                    <Tooltip content="Patients">
                      <a className="ml-2">
                        <FontAwesomeIcon
                          icon={faBedPulse}
                          className="text-xl text-white"
                        />
                      </a>
                    </Tooltip>
                  </Link>
                </li>
                <li className="py-2 cursor-pointer hover:border-r-4 hover:bg-teal-500/10 hover:border-teal-500 hover:transition-opacity">
                  <Link href="/admin/employees">
                    <Tooltip content="Employees">
                      <a className="ml-2">
                        <FontAwesomeIcon
                          icon={faUserMd}
                          className="text-xl text-white"
                        />
                      </a>
                    </Tooltip>
                  </Link>
                </li>
                <li className=" py-2 cursor-pointer hover:border-r-4 hover:bg-teal-500/10 hover:border-teal-500 hover:transition-opacity">
                  <Link href="/admin/user">
                    <Tooltip content="Visitors">
                      <a className="ml-2">
                        <FontAwesomeIcon
                          icon={faUserGroup}
                          className="text-xl text-white"
                        />
                      </a>
                    </Tooltip>
                  </Link>
                </li>
              </ul>
              <div className="mt-2 border-b border-white"></div>
              <ul className="flex flex-col">
                <li className="py-2 cursor-pointer hover:border-r-4 hover:bg-teal-500/10 hover:border-teal-500 hover:transition-opacity">
                  <Link href="/admin/profile">
                    <Tooltip content="Profile">
                      <a className="text-white flex items-center ml-2">
                        <FontAwesomeIcon icon={faUser} className="text-xl" />
                      </a>
                    </Tooltip>
                  </Link>
                </li>
                <li className="py-2 cursor-pointer hover:border-r-4 hover:bg-teal-500/10 hover:border-teal-500 hover:transition-opacity">
                  <Link href="/admin">
                    <Tooltip content="Permissions">
                      <a className="text-white flex items-center ml-2">
                        <FontAwesomeIcon icon={faUserCog} className="text-xl" />
                      </a>
                    </Tooltip>
                  </Link>
                </li>
                <li className="py-2 cursor-pointer hover:border-r-4 hover:bg-teal-500/10 hover:border-teal-500 hover:transition-opacity">
                  <Tooltip content="Roles">
                    <a className="text-white flex items-center ml-2">
                      <FontAwesomeIcon icon={faUserCheck} className="text-xl" />
                    </a>
                  </Tooltip>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="mt-4">
                <li className="py-2 cursor-pointer hover:border-r-4 hover:bg-teal-500/10 hover:border-teal-500 hover:transition-opacity">
                  <Link href="/employee">
                    <Tooltip content="Dashboard">
                      <a className="ml-2">
                        <FontAwesomeIcon
                          icon={faDashboard}
                          className="text-xl text-white"
                        />
                      </a>
                    </Tooltip>
                  </Link>
                </li>
                <li className="py-2 cursor-pointer hover:border-r-4 hover:bg-teal-500/10 hover:border-teal-500 hover:transition-opacity">
                  <Link href="/admin/patients">
                    <Tooltip content="Patients">
                      <a className="ml-2">
                        <FontAwesomeIcon
                          icon={faBedPulse}
                          className="text-xl text-white"
                        />
                      </a>
                    </Tooltip>
                  </Link>
                </li>
                <li className="py-2 cursor-pointer hover:border-r-4 hover:bg-teal-500/10 hover:border-teal-500 hover:transition-opacity">
                  <Link href="/employee/lab">
                    <Tooltip content="Laboratory">
                      <a className="ml-2">
                        <FontAwesomeIcon
                          icon={faPrescriptionBottle}
                          className="text-xl text-white"
                        />
                      </a>
                    </Tooltip>
                  </Link>
                </li>
              </ul>
              <div className="mt-2 border-b border-white"></div>
              <ul className="flex flex-col">
                <li className="py-2 cursor-pointer hover:border-r-4 hover:bg-teal-500/10 hover:border-teal-500 hover:transition-opacity">
                  <Link href="/employee/profile">
                    <Tooltip content="Profile">
                      <a className="text-white flex items-center ml-2">
                        <FontAwesomeIcon icon={faUser} className="text-xl" />
                      </a>
                    </Tooltip>
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

export default SmallSidebar;
