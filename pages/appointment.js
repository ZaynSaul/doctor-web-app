import React from "react";
import Appointment from "../components/Appointment";
import UserLayout from "../components/Layouts/UserLayout";

const Index = () => {
  return (
    <UserLayout title="Appointment">
      <div className="w-full h-screen snap-start flex justify-center items-center">
        <Appointment />
      </div>
    </UserLayout>
  );
};

export default Index;
