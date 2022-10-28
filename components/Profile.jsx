import React from "react";

const Profile = ({ title }) => {
  return (
    <div className="flex flex-col justify-between  py-4 md:flex-row gap-4 ">
      <div className="w-full h-[200px] md:w-[300px] bg-white border border-gray-200 rounded-md shadow-sm"></div>
      <div className="w-full h-screen md:w-[60%] bg-white border border-gray-200 rounded-md shadow-sm p-2">
        <h3>{title ? title + " Profile" : "User"}</h3>
      </div>
    </div>
  );
};

export default Profile;
