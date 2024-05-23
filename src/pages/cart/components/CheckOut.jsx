//
import { AppContextSlice } from "../../../context/AppContext";
import { useContext } from "react";
import CheckForm from "./CheckForm";
import { TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";

export default function CheckOut() {
  const { handelShowCheckoutModal } = useContext(AppContextSlice);

  return (
    <>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
        className="w-[400px] h-[550px] bg-white p-3 rounded-[10px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex justify-end">
            <div className="flex justify-end items-center">
              <span
                className="border p-2 flex justify-center items-center rounded-full hover:bg-red-700 bg-red-600  duration-150 text-white"
                onClick={handelShowCheckoutModal}
              >
                <TfiClose size={20} />
              </span>
            </div>
          </div>
          <CheckForm />
        </div>
      </motion.div>
    </>
  );
}
