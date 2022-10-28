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
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/logo.png";
import Image from "next/image";
import { motion } from "framer-motion";

import Link from "next/link";

const SmallSidebar = ({ userType }) => {
  return (
    <>
      <motion.div
        animate={{ width: "50px" }}
        className="hidden h-screen fixed left-0 top-0  bg-gray-800  md:block"
      >
        <div className="flex flex-col justify-center mx-2">
          <div className="mt-2">
            <Image className="" src={Logo} alt="Logo" />
          </div>
          {userType === "admin" ? (
            <>
              <ul className="mt-4">
                <li className="cursor-pointer mt-4">
                  <Link href="/admin">
                    <a>
                      <FontAwesomeIcon
                        icon={faDashboard}
                        className="text-2xl text-white"
                      />
                    </a>
                  </Link>
                </li>
                <li className="cursor-pointer mt-4">
                  <Link href="/admin/patients">
                    <a>
                      <FontAwesomeIcon
                        icon={faBedPulse}
                        className="text-2xl text-white"
                      />
                    </a>
                  </Link>
                </li>
                <li className="cursor-pointer mt-4">
                  <Link href="/admin/employees">
                    <a>
                      <FontAwesomeIcon
                        icon={faUserMd}
                        className="text-2xl text-white"
                      />
                    </a>
                  </Link>
                </li>
                <li className="cursor-pointer mt-4">
                  <a>
                    <FontAwesomeIcon
                      icon={faUserFriends}
                      className="text-2xl text-white"
                    />
                  </a>
                </li>
              </ul>
              <div className="mt-6"></div>
              <ul className="flex flex-col">
                <li className="cursor-pointer">
                  <Link href="/admin">
                    <a className="text-white flex items-center">
                      <FontAwesomeIcon icon={faUserCog} className="text-2xl" />
                    </a>
                  </Link>
                </li>
                <li className="cursor-pointer mt-4">
                  <a className="text-white flex items-center">
                    <FontAwesomeIcon icon={faUserCheck} className="text-2xl" />
                  </a>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="mt-4">
                <li className="cursor-pointer mt-4">
                  <Link href="/employee">
                    <a>
                      <FontAwesomeIcon
                        icon={faDashboard}
                        className="text-2xl text-white"
                      />
                    </a>
                  </Link>
                </li>
                <li className="cursor-pointer mt-4">
                  <Link href="/admin/patients">
                    <a>
                      <FontAwesomeIcon
                        icon={faBedPulse}
                        className="text-2xl text-white"
                      />
                    </a>
                  </Link>
                </li>
                <li className="cursor-pointer mt-4">
                  <Link href="/employee/lab">
                    <a>
                      <FontAwesomeIcon
                        icon={faPrescriptionBottle}
                        className="text-2xl text-white"
                      />
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="mt-6"></div>
              <ul className="flex flex-col">
                <li className="cursor-pointer">
                  <Link href="/employee/profile">
                    <a className="text-white flex items-center">
                      <FontAwesomeIcon icon={faUser} className="text-2xl" />
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

export default SmallSidebar;
