//
import { FaPhone } from "react-icons/fa";
import { FiUser, FiHeart, FiShoppingBag, FiSearch } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { AppContextSlice } from "../../../context/AppContext";
import { useContext } from "react";

export default function HeaderBottom() {
  const { cartArray } = useContext(AppContextSlice);
  const { pathname } = useLocation();

  return (
    <>
      <div className="w-[200px] h-[50px] bg-white border rounded-full flex justify-center flex-col items-center shadow">
        <h1 className="text-[12px]  text-[#4b4b4b]">
          Order Online or Call Now:
        </h1>
        <div className="flex justify-center items-center text-[#4b4b4b]">
          <FaPhone size={20} />
          <span className="font-bold  mx-1"> +01033998557 </span>
        </div>
      </div>
      <div className="w-[200px] h-[50px] bg-white border rounded-full flex justify-center gap-3 items-center shadow">
        <Link
          to={"/login"}
          className={`hover:bg-[#ffca3c] rounded-full duration-150 p-2 ${
            pathname === "/login" ? "bg-[#ffca3c]" : ""
          }`}
        >
          <FiUser size={20} />
        </Link>
        <Link
          to={"/wishlist"}
          className={`hover:bg-[#ffca3c] rounded-full duration-150 p-2 ${
            pathname === "/wishlist" ? "bg-[#ffca3c]" : ""
          }`}
        >
          <FiHeart size={20} />
        </Link>
        <Link
          to={"/cart"}
          className={`hover:bg-[#ffca3c] relative rounded-full duration-150 p-2 ${
            pathname === "/cart" ? "bg-[#ffca3c]" : ""
          }`}
        >
          <FiShoppingBag size={20} />
          {cartArray?.length > 0 && (
            <span className="w-[15px] h-[15px] bg-red-600 text-[10px] text-white rounded-full top-0 right-0 absolute flex justify-center items-center">
              {cartArray?.length}
            </span>
          )}
        </Link>
        <Link
          to={"/search"}
          className={`hover:bg-[#ffca3c] rounded-full duration-150 p-2 ${
            pathname === "/search" ? "bg-[#ffca3c]" : ""
          }`}
        >
          <FiSearch size={20} />
        </Link>
      </div>
    </>
  );
}
