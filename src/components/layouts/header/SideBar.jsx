//
import { FaPhone } from "react-icons/fa";
import { FiUser, FiHeart, FiShoppingBag, FiSearch } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function SideBar({ setShowSideBar }) {
  return (
    <>
      <div className="w-[100%]">
        <div className="flex justify-end items-center text-white w-[100%] p-[20px]">
          <span
            className="hover:bg-red-500 p-2 rounded-full cursor-pointer"
            onClick={() => setShowSideBar(false)}
          >
            <TfiClose size={20} />
          </span>
        </div>
        <div className="p-[20px]">
          <ul className="text-white flex justify-start flex-col gap-3 text-[20px]">
            <Link
              to={"/home"}
              className="hover:translate-x-2 duration-150 hover:text-[#ffca3c] font-semibold"
            >
              Home
            </Link>
            <Link
              to={""}
              className="hover:translate-x-2 duration-150 hover:text-[#ffca3c] font-semibold"
            >
              About
            </Link>
            <Link
              to={"/shop"}
              className="hover:translate-x-2 duration-150 hover:text-[#ffca3c] font-semibold"
            >
              Menu
            </Link>
            <Link
              to={"/orders"}
              className="hover:translate-x-2 duration-150 hover:text-[#ffca3c] font-semibold"
            >
              Orders
            </Link>
            <Link
              to={""}
              className="hover:translate-x-2 duration-150 hover:text-[#ffca3c] font-semibold"
            >
              Location
            </Link>
            <Link
              to={"/contact"}
              className="hover:translate-x-2 duration-150 hover:text-[#ffca3c] font-semibold"
            >
              Contact
            </Link>
          </ul>
        </div>

        <div>
          <div className="p-[20px] border-t mt-[30px]">
            <h1 className="text-[12px]  text-[#b9b9b9]">
              Order Online or Call Now:
            </h1>
            <div className="flex justify-start items-center text-green-500">
              <FaPhone size={20} />
              <span className="font-bold  mx-1"> +01033998557 </span>
            </div>
          </div>
          <div className="p-[20px] border-b border-t text-white flex justify-between items-center">
            <span className="hover:bg-[#ffca3c] duration-150 p-2 rounded-full hover:text-black">
              <FiUser size={25} />
            </span>
            <span className="hover:bg-[#ffca3c] duration-150 p-2 rounded-full hover:text-black">
              <FiHeart size={25} />
            </span>
            <span className="hover:bg-[#ffca3c] duration-150 p-2 rounded-full hover:text-black">
              <FiShoppingBag size={25} />
            </span>
            <span className="hover:bg-[#ffca3c] duration-150 p-2 rounded-full hover:text-black">
              <FiSearch size={25} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
