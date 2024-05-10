//
import { FaPhone } from "react-icons/fa";
import { FiUser, FiHeart, FiShoppingBag, FiSearch } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";

export default function SideBar({ setShowSideBar }) {
  return (
    <>
      <div className="w-[100%]">
        <div className="flex justify-end items-center text-white w-[100%] p-[20px]">
          <span
            className="hover:bg-red-500 p-2 rounded-full cursor-pointer"
            onClick={() => setShowSideBar(false)}
          >
            <TfiClose size={30} />
          </span>
        </div>
        <div className="p-[20px] ">
          <ul className="text-white flex justify-start flex-col gap-3 text-[20px]">
            <li className="hover:translate-x-2 duration-150 hover:text-red-500 font-semibold">
              Home
            </li>
            <li className="hover:translate-x-2 duration-150 hover:text-red-500 font-semibold">
              About
            </li>
            <li className="hover:translate-x-2 duration-150 hover:text-red-500 font-semibold">
              Menu
            </li>
            <li className="hover:translate-x-2 duration-150 hover:text-red-500 font-semibold">
              Orders
            </li>
            <li className="hover:translate-x-2 duration-150 hover:text-red-500 font-semibold">
              Location
            </li>
            <li className="hover:translate-x-2 duration-150 hover:text-red-500 font-semibold">
              Contact
            </li>
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
            <span>
              <FiUser size={30} />
            </span>
            <span>
              <FiHeart size={30} />
            </span>
            <span>
              <FiShoppingBag size={30} />
            </span>
            <span>
              <FiSearch size={30} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
