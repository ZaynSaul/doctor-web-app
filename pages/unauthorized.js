import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import HeadComponent from "../components/HeadComponent";

export default function Unauthorized() {
  const router = useRouter();
  const { message } = router.query;

  useEffect(() => {
    setTimeout(() => {
      router.push("/auth");
    }, 6000);
  });

  return (
    <>
      <HeadComponent title="Unauthorized Page" />
      <div className="flex justify-center items-center w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500 text-red-500">
        <div className=" flex flex-col gap-4">
          <Link href="/">
            <a className="w-[150px] flex justify-center items-center text-white p-2 bg-teal-500 rounded-md mb-4">
              GO HOME
            </a>
          </Link>
          <h1 className="text-2xl font-nunito font-bold ">Access Denied</h1>
          {message && <div className="mb-4 text-red-500">{message}</div>}
        </div>
      </div>
    </>
  );
}
