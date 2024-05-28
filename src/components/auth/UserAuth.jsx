//
import { AppContextSlice } from "../../context/AppContext";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { TfiClose } from "react-icons/tfi";

export default function UserAuth() {
  const { handelShowUserAuth } = useContext(AppContextSlice);

  return (
    <>
      <div className="flex justify-start items-center h-[100vh] flex-col md:p-[50px] p-[20px]">
        <div className="flex justify-end items-center w-[100%]">
          <span
            className="border p-2 flex justify-center items-center rounded-full bg-red-500 text-white hover:bg-red-600 duration-150"
            onClick={handelShowUserAuth}
          >
            <TfiClose size={20} />
          </span>
        </div>

        <div
          className="md:w-[400px] w-[100%] lg:h-[700px] h-[100vh] bg-white p-5 border shadow-lg mt-[20px] rounded-lg border-gray-300"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mt-5 flex justify-center items-center flex-col">
            <h1 className="text-center font-semibold sm:text-[20px]">
              Welcome Back
            </h1>
            <p className="text-center sm:text-[14px]  sm:w-[70%] w-[100%] text-gray-500 dark:text-gray-400 capitalize">
              we would love have you join our 100% remote network of created
              freelancer
            </p>
          </div>

          <div className="mt-5 p-3 flex justify-center items-center ">
            <button className="capitalize flex justify-center items-center p-3 w-[100%] border rounded shadow">
              <span>
                <FcGoogle />
              </span>
              <span className="mx-1 text-[14px] font-semibold text-gray-600">
                SignUp With Google
              </span>
            </button>
          </div>

          <div className="my-5">OR</div>

          <div className="p-3 mt-3">
            <div className="flex flex-col mb-5">
              <label
                htmlFor=""
                className="text-[14px] font-semibold mb-1 text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                className="p-2 text-[14px]  rounded shadow text-gray-600 border-gray-400 border"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label
                htmlFor=""
                className="text-[14px] font-semibold mb-1 text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                className="p-2 text-[14px] rounded shadow text-gray-600 border-gray-400 border"
                placeholder="Enter Your Password"
              />
            </div>
          </div>

          <div className="p-3 w-[100%] mt-3">
            <button className="p-3 w-[100%] rounded bg-red-500 hover:bg-red-600 duration-150 shadow text-white text-[14px] font-semibold">
              Sign In
            </button>
          </div>

          <div className="p-3 w-[100%] mt-3 flex justify-center items-center">
            <span className="text-[14px] font-bold  text-gray-500 ">
              Not Registered?
            </span>
            <span className="text-red-500  text-[14px] font-bold cursor-pointer">
              Register Here
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
