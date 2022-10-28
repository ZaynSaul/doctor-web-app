import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { getError } from "../utils/error";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLock, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Login = ({ setLogin }) => {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  const handleChange = (e, option) => {
    e.target.checked;
  };
  useEffect(() => {
    if (session?.user.uType == "admin") {
      router.push(redirect || "/admin/").then(() => {
        toast.success("Login successful!", {
          position: toast.POSITION.TOP_RIGHT,
          duration: 3000,
        });
      });
    } else if (session?.user.uType == "nurse") {
      router.push(redirect || "/employee/").then(() => {
        toast.success("Login successful!", {
          position: toast.POSITION.TOP_RIGHT,
          duration: 3000,
        });
      });
    } else if (session?.user.uType === "user") {
      router.push(redirect || "/").then(() => {
        toast.success("Login successful!", {
          position: toast.POSITION.TOP_RIGHT,
          duration: 3000,
        });
      });
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error, {
          position: toast.POSITION.TOP_RIGHT,
          duration: 3000,
        });
      }
    } catch (err) {
      toast.error(getError(err), {
        position: toast.POSITION.TOP_RIGHT,
        duration: 3000,
      });
    }
  };
  return (
    <div className="w-full h-[420px] flex flex-col justify-center items-center p-4">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="text-xl text-teal-500 font-nunito font-medium text-center my-2">
          Sign in to your account
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
              name="email"
              className="w-full h-[40px] bg-transparent outline-none text-xl font-nunito"
              placeholder="Email"
              {...register("email", {
                required: "Please enter email",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: "Please enter a valid email",
                },
              })}
            />
          </div>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="">
          <div className="w-[300px] h-[50px] border border-teal-500 flex justify-start items-center rounded-md">
            <FontAwesomeIcon
              icon={faLock}
              className="mr-2 text-xl text-teal-500 ml-4"
            />
            <input
              type="password"
              name="password"
              className="w-full h-[40px] bg-transparent outline-none text-xl font-nunito"
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
        <div className=" my-1 ">
          <Link href="/auth/forgot-password">
            <a className="text-gray-500 text-sm">Forgot password?</a>
          </Link>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center mt-2  bg-teal-500 text-white hover:bg-white/90 hover:text-teal-600 shadow-lg font-bold rounded-md text-lg px-5 py-2.5 text-center font-nunito items-center"
          >
            Log in
          </button>
        </div>
        <p className="text-center text-red-500 text-sm">
          Not having an account?
        </p>
      </form>
      <Link href="/auth/register">
        <a className="w-full flex justify-center mt-2 bg-teal-500 text-white hover:bg-white/90 hover:text-teal-600 shadow-lg font-bold rounded-md text-lg px-5 py-2.5 text-center font-nunito items-center">
          Create account
        </a>
      </Link>
    </div>
  );
};

export default Login;
