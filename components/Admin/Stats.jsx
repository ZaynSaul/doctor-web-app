import React from "react";
import Card from "../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBedPulse,
  faUserMd,
  faCalendar,
  faTags,
  faEye,
  faLineChart,
} from "@fortawesome/free-solid-svg-icons";

const Stats = () => {
  return (
    <div className="mt-6">
      <div className="flex flex-col flex-wrap justify-between items-center gap-10 md:flex-row">
        <Card
          bgColor="bg-white"
          icon={faUsers}
          bIcon={faEye}
          text="Users"
          count="23"
        />
        <Card
          bgColor="bg-white"
          icon={faBedPulse}
          bIcon={faEye}
          text="In Patients"
          count="8"
        />
        <Card
          bgColor="bg-white"
          icon={faUserMd}
          bIcon={faEye}
          text="Health Workers"
          count="12"
        />
        <Card
          bgColor="bg-white"
          icon={faLineChart}
          bIcon={faEye}
          text="Recoveries"
          count="84%"
        />
      </div>
    </div>
  );
};

export default Stats;
