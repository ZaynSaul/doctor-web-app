import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import BarChart from "../Charts/Bar";
import LineChart from "../Charts/Line";
import DoughnutChart from "../Charts/Doughnut";

const Charts = () => {
  return (
    <div className="flex gap-10 flex-col  justify-between md:flex-row">
      <div className="w-full bg-white text-gray-500 rounded-xl shadow-md p-4 cursor-pointer hover:scale-105 ease-in duration-300">
        <div className="flex justify-between flex-row">
          <p className="font-semibold text-md md:text-xl">Patient updates</p>
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-2 text-gray-500">
              <span>
                <FontAwesomeIcon icon={faCircle} className="text-sm" />
              </span>
              <span>Malaria</span>
            </p>
            <p className="flex items-center gap-2 text-teal-500">
              <span>
                <FontAwesomeIcon icon={faCircle} className="text-sm" />
              </span>
              <span>Pneumonia</span>
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-col-reverse justify-between border border-gray-100 md:w-740 md:flex-row">
          <div className="border-r-0 border-gray-400 m-1 pr-0 md:pr-4 md:border-r md:m-4">
            <div>
              <p>
                <span className="text-md font-semibold md:text-2xl">23k </span>
                <span className="p-1 hover:drop-shadow-xl rounded-full cursor-pointer text-white bg-teal-500">
                  28%
                </span>
              </p>
              <p className="text-gray-500 text-sm md:text-md">Malaria</p>
            </div>
            <div>
              <p>
                <span className="text-md font-semibold md:text-2xl">20k </span>
                <span className="p-1 hover:drop-shadow-xl rounded-full cursor-pointer text-white bg-red-500">
                  32%
                </span>
              </p>
              <p className="text-gray-500 text-sm md:text-md">Pneumonia</p>
            </div>
            <div className="mt-5">
              <LineChart />
            </div>
            <div className="mt-2">
              <button className="flex justify-center items-center gap-2 bg-teal-500 p-2 rounded-lg text-sm text-white cursor-pointer hover:scale-105 ease-in duration-300">
                <FontAwesomeIcon icon={faFilePdf} className="text-sm" />
                Download Report
              </button>
            </div>
          </div>
          <div className="m-1 md:m-4">
            <div className="mt-2 md:mt-3">
              <BarChart />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 justify-center ">
        <div className="w-full md:h-[300px] md:w-[220px] text-xs border border-gray-100 bg-white rounded-md shadow-md cursor-pointer hover:scale-105 ease-in duration-300">
          <DoughnutChart />
        </div>
        <div className="flex justify-center items-center w-full h-[200px] md:w-[220px] md:h-[150px] text-sm mt-4 border border-gray-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md shadow-lg cursor-pointer hover:scale-105 ease-in duration-300">
          <button className="bg-white font-nunito font-semibold p-2 rounded-md text-gray-500 cursor-pointer hover:scale-105 ease-in duration-300">
            Upgrade to pro
          </button>
        </div>
      </div>
    </div>
  );
};

export default Charts;
