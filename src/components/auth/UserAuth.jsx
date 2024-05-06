//
import { IoMdClose } from "react-icons/io";
import { AppContextSlice } from "../../context/AppContext";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";

export default function UserAuth() {
  const { handelShowUserAuth } = useContext(AppContextSlice);

  return (
    <>
      <div
        className="md:w-[400px] w-[100%] h-[100vh] bg-white p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          onClick={handelShowUserAuth}
          className="my-3 shadow hover:border w-[40px] h-[40px] rounded-full hover:bg-red-600 hover:text-white duration-150 flex justify-center items-center
        "
        >
          <IoMdClose size={30} />
        </div>
        <div className="mt-5 flex justify-center items-center flex-col">
          <h1 className="text-center font-semibold text-[20px]">
            Welcome Back
          </h1>
          <p className="text-center text-[14px] w-[70%] text-gray-500 dark:text-gray-400 capitalize">
            we would love have you join our 100% remote network of created
            freelancer
          </p>
        </div>

        <div className="mt-5 p-3 flex justify-center items-center ">
          <button className="capitalize flex justify-center items-center p-2 w-[100%] border rounded shadow">
            <span>
              <FcGoogle />
            </span>
            <span className="mx-1 text-[12px] font-semibold text-gray-600">
              SignUp With Google
            </span>
          </button>
        </div>

        <div className="my-5">OR</div>

        <div className="p-3 mt-3">
          <div className="flex flex-col mb-2">
            <label
              htmlFor=""
              className="text-[12px] font-semibold mb-2 text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              className="p-2 text-[12px]  rounded shadow text-gray-600 border-gray-400 border"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label
              htmlFor=""
              className="text-[12px] font-semibold mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              className="p-2 text-[12px]  rounded shadow text-gray-600 border-gray-400 border"
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
    </>
  );
}
