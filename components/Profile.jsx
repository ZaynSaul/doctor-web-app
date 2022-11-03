import React, { useState } from "react";
import Image from "next/image";
import ProfileImg from "../assets/images/profile.png";
import ChangePassword from "./ChangePassword";
import UpdateUser from "./UpdateUser";
import { useSession } from "next-auth/react";

const Profile = ({ title }) => {
  const [openTab, setOpenTab] = useState(1);
  const { status, data: session } = useSession();
  return (
    <div className="h-full flex flex-col justify-between  py-4 md:flex-row gap-4">
      <div className="flex flex-col justify-center items-center w-full h-[300px] p-2  md:w-1/4 bg-white border border-gray-200 rounded-md shadow-sm font-nunito">
        <div className="rounded-full w-[100px] h-[100px] border border-gray-500 p-1 cursor-pointer">
          <Image
            className="rounded-full"
            src={ProfileImg}
            alt=""
            width="100px"
            height="100px"
            objectFit="cover"
          />
        </div>
        <div className="w-full bg-gray-100 my-1 mt-4 text-center rounded-md">
          <p>NAME: {session.user.name}</p>
        </div>
        <div className="w-full bg-gray-100 my-1 text-center rounded-md">
          <p>Designation: Doctor</p>
        </div>
        <div className="w-full bg-gray-100 my-1 text-center rounded-md">
          <p>Experience: 4years +</p>
        </div>
        <div className="my-4">
          <button className="bg-blue-500 p-2 rounded-md shadow-sm text-white font-nunito">
            Change Profile
          </button>
        </div>
      </div>
      <div className="w-full min-h-screen bg-white border border-gray-200 rounded-md shadow-sm p-2">
        <h3>{title ? title + " Profile" : "User"}</h3>

        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            class="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                class={`inline-block p-4 rounded-t-lg border-b-2  ${
                  openTab === 1
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-600 border-none"
                }`}
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="true"
              >
                Details
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                class={`inline-block p-4 rounded-t-lg border-b-2  ${
                  openTab === 2
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-600 border-none"
                }`}
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                Change Password
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                class={`inline-block p-4 rounded-t-lg border-b-2   ${
                  openTab === 3
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-600 border-none"
                }`}
                id="settings-tab"
                data-tabs-target="#settings"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected="false"
              >
                Settings
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          <div
            class={`p-4 bg-gray-50 rounded-lg ${
              openTab === 1 ? "block" : "hidden"
            }`}
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <p class="text-sm text-gray-800">
              This is some placeholder content the{" "}
              <strong class="font-medium text-blue-400">
                Profile tabs associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            class={`p-4 bg-gray-50 rounded-lg  ${
              openTab === 2 ? "block" : "hidden"
            }`}
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <ChangePassword />
          </div>
          <div
            class={`p-4 bg-gray-50 rounded-lg ${
              openTab === 3 ? "block" : "hidden"
            }`}
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <UpdateUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
