//
import pic from "../../assets/logo.png";
import { IoMdCart } from "react-icons/io";

export default function Header({
  total,
  cartArray,
  handelShowNavbar,
  setShowCart,
}) {
  return (
    <>
      <div className="border-b">
        <div className="flex justify-between items-center mb-10">
          <div>
            <img src={pic} alt="" className="md:w-[150px] w-[80px]" />
          </div>
          <div className="flex justify-center items-center gap-5">
            <button
              onClick={() => handelShowNavbar("category")}
              className="border p-2 bg-[#c52e10]   hover:bg-red-600 duration-150 text-white w-[100px] rounded-[10px] text-[20px]"
            >
              Category
            </button>
            <button
              onClick={() => handelShowNavbar("orders")}
              className="border p-2 bg-[#c52e10]   hover:bg-red-600 duration-150 text-white w-[100px] rounded-[10px] text-[20px]"
            >
              Orders
            </button>
          </div>
          <div
            onClick={() => setShowCart(true)}
            className="cursor-pointer bg-[#c52e10] flex justify-center md:w-[200px] w-[120px] gap-3 items-center border p-1 rounded-[20px] 0 text-white md:h-[50px]"
          >
            <div className="flex justify-center items-center">
              <span className="font-bold md:text-[25px] text-[16px]">
                $ {total}
              </span>
            </div>
            <div className="flex justify-center gap-1 items-center border-l px-2">
              <span>
                <IoMdCart size={30} />
              </span>
              <span className="font-bold md:text-[25px] text-[16px]">
                {cartArray}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}