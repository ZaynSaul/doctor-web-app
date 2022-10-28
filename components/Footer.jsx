import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
function Footer(props) {
  return (
    <>
      <footer className="mt-8 dark:bg-gray-800 text-white flex flex-row justify-between items-center space-x-6 px-6 py-4">
        <div className="font-nunito font-medium text-md">
          <p>&copy;Copyright 2022</p>
        </div>
        <div className="flex flex-row items-center gap-2 font-nunito font-medium text-md">
          <p>Made with </p>
          <FontAwesomeIcon icon={faHeart} className="text-red-500" />
        </div>
      </footer>
      <div className="fixed bottom-12 right-4 z-50 shadow-xl flex justify-center items-center cursor-pointer w-[50px] h-[50px] rounded-full dark:bg-teal-500">
        <Link href="/#">
          <a>
            <FontAwesomeIcon
              icon={faAngleDoubleUp}
              className="text-white text-3xl"
            />
          </a>
        </Link>
      </div>
    </>
  );
}

export default Footer;
