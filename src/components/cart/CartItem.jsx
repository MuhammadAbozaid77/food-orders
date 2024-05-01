//
import picc from "../../assets/pics/burger/burge.png";
import { IoMdClose } from "react-icons/io";
import { LuPlus, LuMinus } from "react-icons/lu";
import { AppContextSlice } from "../../context/AppContext";
import { useContext } from "react";

export default function CartItem({ item }) {
  // console.log(item);
  const { handelIncreaseProduct, handelDescreaseProduct } =
    useContext(AppContextSlice);
  return (
    <>
      <div className="flex justify-start items-center border rounded-[10px] bg-gray-100 gap-3 p-3">
        <div className="h-[100px] w-[140px] border rounded bg-gray-200 flex justify-center items-center">
          <img src={item.pic} alt="" className="rounded h-[100%]" />
        </div>
        <div className="w-[100%] flwx justify-center items-center flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[18px] font-semibold"> {item.name} </h1>
              <span> </span>
            </div>
            <span className="text-red-500 rounded ">
              <IoMdClose size={25} />
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <button
                className="border p-2 rounded bg-black text-white"
                onClick={() => handelDescreaseProduct()}
              >
                <LuMinus size={15} />
              </button>
              <div className=" p-2 rounded text-[25px] font-semibold">1</div>
              <button
                className="border p-2 rounded bg-red-500 text-white"
                onClick={() => handelIncreaseProduct()}
              >
                <LuPlus size={15} />
              </button>
            </div>
            <span className="text-red-500 font-semibold text-[25px]">
              $ {item.price}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
