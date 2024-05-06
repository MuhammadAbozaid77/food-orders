//
import { TiPlus } from "react-icons/ti";

import { useContext } from "react";
import { AppContextSlice } from "../../context/AppContext";

export default function ProductPrice({ item }) {
  const { handelSelectProduct } = useContext(AppContextSlice);

  return (
    <>
      <div className="flex items-center justify-between w-[100%] px-3 py-1 flex-col   h-[100px] border-t border-gray-200">
        <div className="w-[100%] flex  justify-between  flex-col">
          <div className="text-white">
            <h1 className="font-bold  text-[20px]"> {item.name} </h1>
            <p className="text-black text-[14px] font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex justify-between items-center ">
            <h1 className="text-[30px] font-bold text-white">$ {item.price}</h1>
            <button
              onClick={() => handelSelectProduct(item)}
              className="rounded-[5px] bg-black hover:bg-slate-800 duration-150 text-white cursor-pointer py-2 px-3"
            >
              <TiPlus size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
