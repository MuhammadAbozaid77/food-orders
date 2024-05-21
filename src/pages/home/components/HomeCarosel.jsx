//
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function HomeCarosel() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="relative xl:w-[1200px] lg:w-[1000px] mmd:w-[920px] md:w-[850px] w-full border lg:h-[600px] shadow-lg">
          <div className="absolute w-[50px] h-[50px] bg-red-500 text-white top-1/2 left-0 flex justify-center items-center transform -translate-y-1/2 mx-2 rounded-[10px]">
            <SlArrowLeft size={30} />
          </div>
          <div className="absolute w-[50px] h-[50px] bg-red-500 text-white top-1/2 right-0 flex justify-center items-center transform -translate-y-1/2 mx-2 rounded-[10px]">
            <SlArrowRight size={30} />
          </div>
        </div>
      </div>
    </>
  );
}
