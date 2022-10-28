import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Breadcrumb = ({ icon, pageName }) => {
  return (
    <nav
      className="w-full flex px-5 py-3 bg-white mt-6 rounded-lg"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-teal-500 dark:text-tea-500 dark:hover:text-teal-500"
          >
            <FontAwesomeIcon
              icon={icon}
              className="text-2xl text-gray-500 mr-2"
            />
            {pageName}
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
