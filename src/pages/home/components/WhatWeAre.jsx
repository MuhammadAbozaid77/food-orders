//
import { MdDeliveryDining } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { TbTimeDuration45 } from "react-icons/tb";
import { FaStore } from "react-icons/fa6";

export default function WhatWeAre() {
  return (
    <>
      <div className="w-[100%] md:px-[100px] px-[20px] py-2  mt-[50px] border-t pt-[50px]">
        <div className="flex justify-center items-center  w-[100%]">
          <span className="font-bold text-[30px]">What We Serve Beside</span>
          <span className="font-bold text-[30px] text-red-500  mx-2">
            Delicious Food
          </span>
        </div>
        <div className="flex justify-center items-center ">
          <p className="mb-3 text-gray-500 dark:text-gray-400 font-semibold w-[700px] text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
            sint nulla consectetur accusantium tempora qui! Omnis odio eligendi
            aperiam? Esse harum et, id veritatis quam minus ratione dolorum
            animi. Adipisci!
          </p>
        </div>
      </div>

      <div className="flex gap-5 mt-[10px] flex-wrap justify-center">
        <div className="border p-3 lg:w-[180px] w-[150px] h-[120px] rounded-[10px] flex justify-center items-center flex-col hover:bg-red-100 duration-150">
          <span className="text-[#61443e]">
            <TbTimeDuration45 size={50} />
          </span>
          <span className="text-[16px] mt-2 font-semibold text-gray-600">
            Fast Delivery
          </span>
        </div>

        <div className="border p-3 lg:w-[180px] w-[150px] h-[120px] rounded-[10px] flex justify-center items-center flex-col hover:bg-red-100 duration-150">
          <span className="text-[#61443e]">
            <MdDeliveryDining size={50} />
          </span>
          <span className="text-[16px]  mt-2 font-semibold text-gray-600">
            Fast Delivery
          </span>
        </div>

        <div className="border p-3 lg:w-[180px] w-[150px] h-[120px] rounded-[10px] flex justify-center items-center flex-col hover:bg-red-100 duration-150">
          <span className="text-[#61443e]">
            <FaStore size={50} />
          </span>
          <span className="text-[16px]  mt-2 font-semibold text-gray-600">
            Fast Delivery
          </span>
        </div>

        <div className="border p-3 lg:w-[180px] w-[150px]  h-[120px] rounded-[10px] flex justify-center items-center flex-col hover:bg-red-100 duration-150">
          <span className="text-[#61443e]">
            <GiForkKnifeSpoon size={50} />
          </span>
          <span className="text-[16px] mt-2 font-semibold text-gray-600">
            Fast Delivery
          </span>
        </div>
      </div>
    </>
  );
}
