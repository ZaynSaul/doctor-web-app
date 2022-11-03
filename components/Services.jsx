import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHeartbeat,
  faSyringe,
  faStethoscope,
  faTeethOpen,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="bg-white text-black w-full sm:py-4">
      <h1 className="text-center text-2xl text-teal-500 font-extrabold font-nunito mb-4 mt-8">
        Ou<span className=" border-b-4 border-teal-500">r Servic</span>es
      </h1>
      <div className="flex flex-col justify-center items-center ">
        <h2 className="text-3xl dark:text-gray-600 font-extrabold font-nunito mb-3">
          Services For Your Health
        </h2>
        <div className="flex flex-col  items-center mt-8 md:flex-row md:space-x-8 ">
          <div className="p-4 max-w-sm bg-gray-900 rounded-lg border border-gray-200 shadow-lg dark:border-gray-700 mb-8 md:mb-0">
            <FontAwesomeIcon
              icon={faHeartbeat}
              style={{ fontSize: "50px" }}
              className="mb-2 text-red-600"
            />

            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight  text-white">
                Cardiology
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              Explore Now
              <FontAwesomeIcon
                icon={faTag}
                style={{ fontSize: "20px" }}
                className="ml-2"
              />
            </a>
          </div>

          <div className="p-4 max-w-sm bg-gray-900 rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <FontAwesomeIcon
              icon={faSyringe}
              style={{ fontSize: "50px" }}
              className="mb-2 text-teal-600"
            />
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">
                Opthalmology
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              Explore Now
              <FontAwesomeIcon
                icon={faTag}
                style={{ fontSize: "20px" }}
                className="ml-2"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center mt-8 mb-8 md:flex-row md:space-x-8">
          <div className="p-4 max-w-sm bg-gray-900 rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700  mb-8 md:mb-0">
            <FontAwesomeIcon
              icon={faStethoscope}
              style={{ fontSize: "50px" }}
              className="mb-2 text-white"
            />
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white ">
                Monthly Check Up
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              Explore Now
              <FontAwesomeIcon
                icon={faTag}
                style={{ fontSize: "20px" }}
                className="ml-2"
              />
            </a>
          </div>

          <div className="p-4  max-w-sm bg-gray-900 rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <FontAwesomeIcon
              icon={faTeethOpen}
              style={{ fontSize: "50px" }}
              className="mb-2 text-blue-600"
            />
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">
                Dental Care
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              Explore Now
              <FontAwesomeIcon
                icon={faTag}
                style={{ fontSize: "20px" }}
                className="ml-2"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
