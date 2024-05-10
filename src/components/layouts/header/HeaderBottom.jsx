//
import { FaPhone } from "react-icons/fa";
import { FiUser, FiHeart, FiShoppingBag, FiSearch } from "react-icons/fi";

export default function HeaderBottom() {
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
        <span className="hover:bg-[#ffca3c] rounded-full duration-150 p-2">
          <FiUser size={20} />
        </span>
        <span className="hover:bg-[#ffca3c] rounded-full duration-150 p-2">
          <FiHeart size={20} />
        </span>
        <span className="hover:bg-[#ffca3c] rounded-full duration-150 p-2">
          <FiShoppingBag size={20} />
        </span>
        <span className="hover:bg-[#ffca3c] rounded-full duration-150 p-2">
          <FiSearch size={20} />
        </span>
      </div>
    </>
  );
}
