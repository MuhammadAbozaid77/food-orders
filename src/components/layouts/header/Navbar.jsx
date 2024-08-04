import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";

import { AppContextSlice } from "../../../context/AppContext";

export default function Navbar() {
  const { setShowSideBar } = useContext(AppContextSlice);

  return (
    <>
      <div className="flex justify-between items-center md:p-[20px] px-[30px] lg:w-[1000px] w-[100%] relative">
        <div className="md:w-[250px] w-[120px]">
          <img src={logo} alt="" className="w-[50%]" />
        </div>
        <ul className="hidden md:flex justify-start items-center gap-5 font-semibold  text-white uppercase text-[18px]">
          <NavLink to={""}> Home </NavLink>
          <NavLink to={"/shop"}> Menu </NavLink>
          <NavLink to={"/orders"}> Orders </NavLink>
          <NavLink to={"/location"}> Location </NavLink>
          <NavLink to={"/contact"}> Contact </NavLink>
        </ul>

        <div
          className="flex justify-center items-center md:hidden w-[50px] h-[50px] bg-black rounded-full text-white cursor-pointer"
          onClick={() => setShowSideBar(true)}
        >
          <GiHamburgerMenu size={30} />
        </div>
      </div>
    </>
  );
}
