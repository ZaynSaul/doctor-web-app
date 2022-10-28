import React, { useEffect } from "react";
import { getError } from "../utils/error";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { signIn, useSession } from "next-auth/react";

import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUserCircle,
  faLock,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";

const Registration = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/auth");
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ name, email, password, uType }) => {
    try {
      await axios.post("/api/auth/register", {
        name,
        email,
        password,
        uType,
      });

      router.push("/auth").then(() => {
        toast.success("Registration is successful!, try and login", {
          position: toast.POSITION.TOP_RIGHT,
          duration: 3000,
        });
      });
      reset();
      // const result = await signIn("credentials", {
      //   redirect: false,
      //   email,
      //   password,
      // });
      // if (result.error) {
      //   toast.error(result.error, {
      //     position: toast.POSITION.TOP_RIGHT,
      //     duration: 3000,
      //   });
      // }
    } catch (err) {
      toast.error(getError(err), {
        position: toast.POSITION.TOP_RIGHT,
        duration: 3000,
      });
    }
  };
  return (
    <div className="w-full h-[420px] flex flex-col justify-center items-center p-4 ">
      <div className="text-xl text-teal-500 font-nunito font-medium text-center my-2">
        Register to get started
      </div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="mb-4">
          <div
            className="w-[300px] h-[50px] border border-teal-500 flex justify-start items-center rounded-md
        "
          >
            <FontAwesomeIcon
              icon={faUserCircle}
              className="mr-2 text-xl text-teal-500 ml-4"
            />
            <input
              type="text"
              id="name"
              className="w-full h-[40px] bg-transparent autofocus outline-none text-xl font-nunito"
              placeholder="Full name"
              {...register("name", {
                required: "Please enter name",
              })}
            />
          </div>
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}
        </div>
        <div className="mb-4">
          <div
            className="w-[300px] h-[50px] border border-teal-500 flex justify-start items-center rounded-md
        "
          >
            <FontAwesomeIcon
              icon={faEnvelopeOpen}
              className="mr-2 text-xl text-teal-500 ml-4"
            />
            <input
              type="email"
              id="email"
              className="w-full h-[40px] bg-transparent autofocus outline-none text-xl font-nunito"
              placeholder="Email"
              {...register("email", {
                required: "Please enter email",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: "Please enter valid email",
                },
              })}
            />
          </div>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-2">
          <div className="w-[300px] h-[50px] border border-teal-500 flex justify-start items-center rounded-md">
            <FontAwesomeIcon
              icon={faLock}
              className="mr-2 text-xl text-teal-500 ml-4"
            />
            <input
              type="password"
              id="password"
              className="w-full h-[40px] bg-transparent autofocus outline-none text-xl font-nunito"
              placeholder="*********"
              {...register("password", {
                required: "Please enter password",
                minLength: {
                  value: 6,
                  message: "password is more than 5 chars",
                },
              })}
            />
          </div>
          {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
        </div>
        <div className="flex flex-row justify-start items-center gap-4 mb-1">
          <div class="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value="user"
              name="uType"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-500"
            >
              Visitor
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="default-radio-1"
              type="radio"
              value="nurse"
              name="uType"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              className="ml-2 text-sm font-medium text-gray-500"
            >
              Nurse
            </label>
          </div>
        </div>
        <div>
          <button className="w-full mt-2 flex justify-center  bg-teal-500 text-white hover:bg-white/90 hover:text-teal-600 shadow-lg font-bold rounded-md text-lg px-5 py-2.5 text-center font-nunito items-center">
            Register
          </button>
        </div>
        <p className="text-center text-red-500 text-sm">
          Already having an account?
        </p>
      </form>
      <Link href="/auth">
        <a className="w-full flex justify-center mt-2 bg-teal-500 text-white hover:bg-white/90 hover:text-teal-600 shadow-lg font-bold rounded-md text-lg px-5 py-2.5 text-center font-nunito items-center">
          Log in
        </a>
      </Link>
    </div>
  );
};

export default Registration;
