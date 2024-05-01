//
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function CartDetails() {
  return (
    <>
      <div>
        <h1 className="font-semibold text-[20px] text-gray-700">
          Bill Details
        </h1>
        <div className="flex justify-between items-center mt-5">
          <span className="font-semibold text-gray-600"> Item total </span>
          <span className="font-semibold text-red-500"> $55.22 </span>
        </div>
        <div className="flex justify-between items-center mt-5">
          <span className="font-semibold text-gray-600">Delivery Charges </span>
          <span className="font-semibold text-red-500"> $55.22 </span>
        </div>
        <div className="flex justify-between items-center mt-5">
          <span className="font-semibold text-gray-600">
            Govt Taxes & Other Charges
          </span>
          <span className="font-semibold text-red-500"> $55.22 </span>
        </div>
        <div className="flex justify-between items-center mt-5 border-t pt-3">
          <span className="font-semibold text-gray-800 text-[20px]">Total</span>
          <span className="font-semibold text-red-500"> $55.22 </span>
        </div>

        <button className="p-3 w-[100%] bg-red-500 text-white my-5 font-semibold  flex justify-center items-center rounded-[10px]">
          <span className="text-[20px]"> Check Orders</span>
          <span className="mx-2">
            <MdKeyboardDoubleArrowRight size={30} />
          </span>
        </button>
      </div>
    </>
  );
}
