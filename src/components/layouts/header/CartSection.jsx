//
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function CartSection() {
  return (
    <>
      <div className="flex justify-center items-center gap-3">
        <Link
          to={"/orders"}
          className="w-[45px] h-[45px] border  flex justify-center items-center bg-red-500 text-white rounded-[10px]"
        >
          <FaUser size={20} />
        </Link>
        <Link
          to={"/cart"}
          className="w-[45px] h-[45px] border  flex justify-center items-center bg-red-500 text-white rounded-[10px] relative"
        >
          <FaCartShopping size={20} />
          <span className="absolute w-[22px] h-[22px] rounded-full -top-[10px] -right-[10px] bg-gray-700 flex justify-center items-center text-[12px] font-semibold">
            1
          </span>
        </Link>
      </div>
    </>
  );
}
