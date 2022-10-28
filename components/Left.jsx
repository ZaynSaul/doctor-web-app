import React from "react";
import HealthImg from "../assets/images/health.png";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

const Left = () => {
  return (
    <>
      <div>
        <div className="">
          <Image src={HealthImg} alt="doctor" width="400px" height="400px" />
        </div>
        <div className="absolute top-0 ml-4 w-[100px] h-[40px] bg-teal-500 rounded-md  flex justify-center items-center hover:scale-105 ease-in duration-300 md:top-32">
          <Link href="/">
            <a className="text-white">
              <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                className="mr-2 text-xl"
              />
              Back
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Left;
