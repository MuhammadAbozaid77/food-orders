//
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Contacts() {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 h-[300px] p-5">
        <div className="col-span-1  p-2">
          <div className="flex justify-center items-center sm:text-[30px] text-[20px] font-semibold bg-red-600 text-white rounded-md py-2">
            Phone
          </div>
          <div className="flex justify-center items-center mt-5 sm:text-[20px] text-[16px] gap-3">
            <span className="text-red-500">
              <FaPhone size={25} />
            </span>
            <span> 01033669988 </span>
          </div>
          <div className="flex justify-center items-center mt-2 sm:text-[20px] text-[16px] gap-3">
            <span className="text-green-500">
              <FaWhatsapp size={30} />
            </span>
            <span> 01144778899 </span>
          </div>
        </div>

        <div className="col-span-1  p-2">
          <div className="flex justify-center items-center sm:text-[30px] text-[20px] font-semibold bg-red-600 text-white rounded-md py-2">
            Email
          </div>
          <div className="flex justify-center items-center mt-5 sm:text-[20px] text-[16px]  gap-3 flex-wrap">
            <span className="text-blue-500">
              <MdEmail size={30} />
            </span>
            <span> muhammadabozaid77@gmail.com </span>
          </div>
        </div>

        <div className="col-span-1  p-2">
          <div className="flex justify-center items-center sm:text-[30px] text-[20px] font-semibold bg-red-600 text-white rounded-md py-2">
            Address
          </div>
          <div className="flex justify-center items-center mt-5 sm:text-[20px] text-[16px]  gap-3">
            <span className="text-red-500">
              <FaLocationDot size={25} />
            </span>
            <span> Egypt - Cairo - Nasr City </span>
          </div>
        </div>
      </div>
    </>
  );
}
