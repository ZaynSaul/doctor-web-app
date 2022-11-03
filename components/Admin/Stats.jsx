import React from "react";
import Card from "../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBedPulse,
  faUserMd,
  faArrowUp,
  faEye,
  faLineChart,
} from "@fortawesome/free-solid-svg-icons";

const Stats = () => {
  return (
    <div className="mt-6">
      <div className="flex flex-col flex-wrap justify-between items-center gap-10 md:flex-row">
        <Card
          bgColor="bg-white"
          icon={faArrowUp}
          bIcon={faEye}
          text="Out Patients"
          count="12"
          link=""
        />
        <Card
          bgColor="bg-white"
          icon={faBedPulse}
          bIcon={faEye}
          text="In Patients"
          count="18"
          link="/admin/patients"
        />
        <Card
          bgColor="bg-white"
          icon={faUserMd}
          bIcon={faEye}
          text="Health Workers"
          count="12"
          link="/admin/employees"
        />
        <Card
          bgColor="bg-white"
          icon={faLineChart}
          bIcon={faEye}
          text="Satisfaction"
          count="84%"
          link=""
        />
      </div>
    </div>
  );
};

export default Stats;
