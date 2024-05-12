import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";

import { AppContextSlice } from "../../../context/AppContext";

export default function Navbar() {
  const { setShowSideBar } = useContext(AppContextSlice);

  return (
    <>
      <div className="flex justify-between items-center md:p-[20px] px-[30px] lg:w-[1000px] w-[100%] relative">
        <ul className="w-[100%]  hidden md:flex justify-start items-center gap-5 font-semibold  text-white uppercase text-[18px]">
          <Link to={""}> Home </Link>
          <Link to={"/about"}> About </Link>
          <Link to={"/shop"}> Menu </Link>
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
          <Link to={"/orders"}> Orders </Link>
          <Link to={"/location"}> Location </Link>
          <Link to={"/contact"}> Contact </Link>
        </ul>
      </div>
    </>
  );
}
