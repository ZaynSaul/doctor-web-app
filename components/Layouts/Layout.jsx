import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import MainSidebar from "../Admin/MainSidebar";
import MobileSidebar from "../Admin/MobileSideBar";
import SmallSidebar from "../Admin/SmallSidebar";
import TopBar from "../Admin/TopBar";
import "react-toastify/dist/ReactToastify.css";
import Router, { useRouter } from "next/router";

const Layout = ({ title, children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showMobileSidebar, setMobileSidebar] = useState(false);

  const { status, data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;
  useEffect(() => {
    if (status === "unauthenticated" || session?.user === null) {
      router.push("/unauthorized").then(() => {
        toast.error("Access denied, try and login", {
          position: toast.POSITION.TOP_CENTER,
          duration: 3000,
        });
      });
    }
  }, [router, status, session, redirect]);
  if (
    status === "authenticated" &&
    (session?.user.uType === "admin" || session.user.uType === "nurse")
  ) {
    const username = session?.user.name;
    const userType = session?.user.uType;
    return (
      <>
        <div>
          <Head>
            <title>{title ? "Clinic - " + title : "Home"}</title>
            <meta name="description" content="Clinic Website" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <main
            className={`flex w-full min-h-screen gap-0 bg-[#FCF4F0] ${
              showSidebar ? "md:gap-[100px]" : "md:gap-6"
            }`}
          >
            {/* Sidebar Start */}
            <aside className="sidebar">
              {showSidebar ? (
                <MainSidebar userType={userType} />
              ) : (
                <SmallSidebar userType={userType} />
              )}
            </aside>
            <aside className="">
              {showMobileSidebar && (
                <MobileSidebar
                  userType={userType}
                  setMobileSidebar={setMobileSidebar}
                />
              )}
            </aside>
            {/* Sidebar end */}
            <div
              className={`w-full flex-col flex-1  ${
                showSidebar ? "md:ml-0" : "md:ml-0"
              }`}
            >
              {/* TopBar */}
              {status === "loading" ? (
                <div className="text-green-500 text-lg text-center">
                  {" "}
                  Loading.....{" "}
                </div>
              ) : (
                <TopBar
                  showSidebar={showSidebar}
                  setShowSidebar={setShowSidebar}
                  showMobileSidebar={showMobileSidebar}
                  setMobileSidebar={setMobileSidebar}
                  username={username}
                  userType={userType}
                />
              )}
              <div className="px-8">{children}</div>
            </div>
          </main>
        </div>
      </>
    );
  } else if (status === "authenticated" && session.user.uType === "user") {
    router.push("/").then(() => {
      toast.error("Access denied, stay at home page", {
        position: toast.POSITION.TOP_CENTER,
        duration: 3000,
      });
    });
  }
};

export default Layout;
