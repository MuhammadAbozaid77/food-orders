//
import burger from "../../assets/pics/burger/burge.png";
import Wrapper from "../../components/ui/Wrapper";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export default function Cart() {
  return (
    <>
      <Wrapper>
        <div className="flex flex-row  gap-5">
          <div className="basis-8/12 rounded-md h-fit">
            <div className="flex mb-5 border rounded-[8px]">
              <div className="h-[120px]">
                <img src={burger} alt="" className="h-[100%] border-r" />
              </div>
              <div className="flex justify-between items-center w-[100%] px-3">
                <div className="h-[70%]">
                  <h6> Double Patty Burger </h6>
                  <div className="flex justify-center items-center gap-3">
                    <span> By Burger Farm </span>
                    <span className="flex justify-center items-center gap-2">
                      <span>
                        <MdOutlineDeliveryDining size={20} />
                      </span>
                      30 min
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-end h-[70%]">
                  <div className="border px-1 flex justify-center items-center w-[60px] bg-[#fe9f10] rounded-lg ">
                    <span className="mx-1">
                      <FaStar color="white" />
                    </span>
                    <span className="font-semibold text-white text-[16px]">
                      4.5
                    </span>
                  </div>
                  <div>
                    <span> $ 15 </span>
                    <span> For a One </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mb-5 border rounded-[8px]">
              <div className="h-[120px]">
                <img src={burger} alt="" className="h-[100%] border-r" />
              </div>
              <div className="flex justify-between items-center w-[100%] px-3">
                <div className="h-[70%]">
                  <h6> Double Patty Burger </h6>
                  <div className="flex justify-center items-center gap-3">
                    <span> By Burger Farm </span>
                    <span className="flex justify-center items-center gap-2">
                      <span>
                        <MdOutlineDeliveryDining size={20} />
                      </span>
                      30 min
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-end h-[70%]">
                  <div className="border px-1 flex justify-center items-center w-[60px] bg-[#fe9f10] rounded-lg ">
                    <span className="mx-1">
                      <FaStar color="white" />
                    </span>
                    <span className="font-semibold text-white text-[16px]">
                      4.5
                    </span>
                  </div>
                  <div>
                    <span> $ 15 </span>
                    <span> For a One </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 border bg-slate-200 basis-4/12 rounded-md h-fit">
            <h1>ghghg</h1>
            <h1>ghghg</h1>
            <h1>ghghg</h1>
            <h1>ghghg</h1>
            <h1>ghghg</h1>
            <h1>ghghg</h1>
            <h1>ghghg</h1>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
