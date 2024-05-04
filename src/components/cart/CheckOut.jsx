//
import { IoMdClose } from "react-icons/io";
import { AppContextSlice } from "../../context/AppContext";
import { useContext } from "react";
import CheckForm from "./CheckForm";
export default function CheckOut() {
  const { handelShowCheckoutModal } = useContext(AppContextSlice);

  return (
    <>
      <div
        className="w-[400px] h-[500px] bg-white p-3 rounded-[10px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="border w-[40px] h-[40px] flex justify-center items-center cursor-pointer rounded-[5px] bg-red-700 hover:bg-red-600 duration-150 text-white">
            <IoMdClose size={30} onClick={handelShowCheckoutModal} />
          </div>
          <CheckForm />
        </div>
      </div>
    </>
  );
}
