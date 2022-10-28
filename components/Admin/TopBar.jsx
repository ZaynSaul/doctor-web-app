import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faComments,
  faBell,
  faArrowRight,
  faCalendarAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Logout from "../Logout";
import Profile from "../../assets/images/profile.png";
import Image from "next/image";
import Link from "next/link";
import ViewMessages from "../Popups/Messages";
import ViewNotification from "../Popups/Notification";

const TopBar = ({
  showMobileSidebar,
  setMobileSidebar,
  showSidebar,
  setShowSidebar,
  username,
  userType,
}) => {
  const [showLogout, setLogout] = useState(false);
  const [isMsgModal, setIsMsgModal] = useState(false);
  const [isNoteModal, setIsNoteModal] = useState(false);
  return (
    <div className="w-full h-[60px] bg-white flex justify-between items-center p-2">
      <div className="flex justify-between items-center gap-4">
        <div
          className="hidden cursor-pointer md:block"
          onClick={() =>
            showSidebar ? setShowSidebar(false) : setShowSidebar(true)
          }
        >
          {showSidebar ? (
            <FontAwesomeIcon icon={faBars} className="text-2xl text-gray-800" />
          ) : (
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-2xl text-gray-800"
            />
          )}
        </div>
        <div
          className="block cursor-pointer md:hidden"
          onClick={() =>
            showMobileSidebar ? setMobileSidebar(false) : setMobileSidebar(true)
          }
        >
          <FontAwesomeIcon icon={faBars} className="text-2xl text-gray-800" />
        </div>
        <div className="block cursor-pointer md:hidden">
          <FontAwesomeIcon icon={faSearch} className="text-xl text-gray-800" />
        </div>
        <div className="hidden w-[300px] h-[40px] bg-white md:flex justify-between items-center border border-gray-500 rounded-md">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-xl text-gray-800 mx-4"
          />
          <input
            type="text"
            className="w-full h-[35px] outline-none bg-transparent text-xl text-gray-500"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center gap-4">
        {userType === "admin" ? (
          <ul className="flex justify-between items-center gap-4 ">
            <Link href="/admin/appointment">
              <li className="cursor-pointer">
                <a className="relative flex items-center ">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className=" text-xl text-gray-800 hover:text-teal-500"
                  />
                  <p className="absolute top-0 right-0 w-[10px] h-[10px] rounded-full bg-red-600"></p>
                </a>
              </li>
            </Link>
            <li className="cursor-pointer">
              <a
                onClick={() => setIsMsgModal(true)}
                className="relative flex items-center "
              >
                <FontAwesomeIcon
                  icon={faComments}
                  className=" text-xl text-gray-800 hover:text-teal-500"
                />
                <p className="absolute top-0 right-0 w-[10px] h-[10px] rounded-full bg-red-600"></p>
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                onClick={() => setIsNoteModal(true)}
                className="relative flex items-center "
              >
                <FontAwesomeIcon
                  icon={faBell}
                  className=" text-xl text-gray-800 hover:text-teal-500"
                />
                <p className="absolute top-0 right-0 w-[10px] h-[10px] rounded-full bg-red-600"></p>
              </a>
            </li>
          </ul>
        ) : (
          <ul className="flex justify-between items-center gap-4 ">
            <li className="cursor-pointer">
              <a className="relative flex items-center ">
                <FontAwesomeIcon
                  icon={faComments}
                  className=" text-xl text-gray-800 hover:text-teal-500"
                />
                <p className="absolute top-0 right-0 w-[10px] h-[10px] rounded-full bg-red-600"></p>
              </a>
            </li>
            <li className="cursor-pointer">
              <a className="relative flex items-center ">
                <FontAwesomeIcon
                  icon={faBell}
                  className=" text-xl text-gray-800 hover:text-teal-500"
                />
                <p className="absolute top-0 right-0 w-[10px] h-[10px] rounded-full bg-red-600"></p>
              </a>
            </li>
          </ul>
        )}

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
          <p className="text-md">{username}</p>
          <div className="">
            <FontAwesomeIcon
              icon={faChevronDown}
              className=" text-md text-gray-800"
            />
          </div>
          {showLogout && (
            <Logout showLogout={showLogout} setLogout={setLogout} />
          )}
        </div>
      </div>
      {isMsgModal && (
        <ViewMessages isMsgModal={isMsgModal} setIsMsgModal={setIsMsgModal} />
      )}
      {isNoteModal && (
        <ViewNotification
          isNoteModal={isNoteModal}
          setIsNoteModal={setIsNoteModal}
        />
      )}
    </div>
  );
};

export default TopBar;
