import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
//
// const navbarLinks = [
//   {
//     name: "home",
//     path: "home",
//   },
//   {
//     name: "shop",
//     path: "shop",
//   },
//   {
//     name: "orders",
//     path: "orders",
//   },
//   {
//     name: "contact us",
//     path: "contact",
//   },
// ];

import { AppContextSlice } from "../../../context/AppContext";

export default function Navbar() {
  const { setShowSideBar } = useContext(AppContextSlice);

  return (
    <>
      <div className="flex justify-between items-center md:p-[20px] px-[30px] lg:w-[900px] w-[100%] relative">
        <ul className="w-[100%]  hidden md:flex justify-start items-center gap-5 font-semibold  text-white uppercase text-[18px]">
          <li> Home </li>
          <li> About </li>
          <li> Menu </li>
        </ul>

        {/*---------------- In Medium Size ----------------*/}
        <div className="md:w-[250px] w-[120px]">
          <img src={logo} alt="" className="w-[100%]" />
        </div>

        <div
          className="flex justify-center items-center md:hidden w-[50px] h-[50px] bg-black rounded-full text-white cursor-pointer"
          onClick={() => setShowSideBar(true)}
        >
          <GiHamburgerMenu size={30} />
        </div>

        <ul className="w-[100%] hidden md:flex justify-end items-center gap-5 text-white font-semibold uppercase text-[18px]">
          <li> Orders </li>
          <li> Location </li>
          <li> Contact </li>
        </ul>
      </div>
    </>
  );
}
