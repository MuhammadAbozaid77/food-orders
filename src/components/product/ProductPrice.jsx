//
import { TiPlus } from "react-icons/ti";

import { useContext } from "react";
import { AppContextSlice } from "../../context/AppContext";

export default function ProductPrice({ item }) {
  const { handelSelectProduct } = useContext(AppContextSlice);

  return (
    <>
      <div className="flex items-center justify-between w-[100%] p-3 flex-col bg-red-500 hover:bg-red-600 duration-150 h-[100%] border-t border-red-200">
        <div className="w-[100%] flex  justify-between  items-center h-[80px] ">
          <div className="text-white">
            <h1 className="font-bold text-black text-[18px]"> {item.name} </h1>
            <h1 className="text-[25px] font-bold "> $ {item.price} </h1>
          </div>
          <button
            onClick={() => handelSelectProduct(item)}
            className="rounded-[5px] bg-black hover:bg-gray-800 duration-150 text-white cursor-pointer py-2 px-3"
          >
            <TiPlus size={20} />
          </button>
        </div>
      </div>
    </>
  );
}
