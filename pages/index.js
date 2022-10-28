import { useState } from "react";
import Footer from "../components/Footer";
import HeadComponent from "../components/HeadComponent";
import Hero from "../components/Hero";
import UserLayout from "../components/Layouts/UserLayout";
import Nav from "../components/Nav";
import Services from "../components/Services";

export default function Home() {
  const [showAppointment, setShowAppointment] = useState(false);
  return (
    <UserLayout>
      <div className="snap-start">
        <Hero
          showAppointment={showAppointment}
          setShowAppointment={setShowAppointment}
        />
      </div>
      {/* Hero end */}
      {/* Services Start */}
      <div className="snap-center">
        <Services />
      </div>
    </UserLayout>
  );
}
