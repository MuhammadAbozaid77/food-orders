//
import burger from "../../assets/pics/burger/burge.png";
import Wrapper from "../../components/ui/Wrapper";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { FaChevronRight, FaStar } from "react-icons/fa";

export default function Cart() {
  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="flex justify-center w-[1000px] gap-5">
          <div className="w-[60%]">
            <div>
              <div className="h-[120px]">
                <img className="h-[100%] border-r" src={burger} alt="" />
              </div>
            </div>
          </div>
          <div className="w-[40%]">fggf</div>
        </div>
      </div>
    </>
  );
}
