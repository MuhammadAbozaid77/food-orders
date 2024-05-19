import ProductPrice from "./ProductPrice";
import { FiHeart } from "react-icons/fi";

export default function ProductItem({ item }) {
  return (
    <>
      <div className="relative rounded-[10px] shadow-lg  h-[380px] lg:w-[260px] md:w-[250px] w-[280px] flex justify-center flex-col border">
        <div className="min-h-[250px] flex justify-center items-center border-b ">
          <img src={item.pic} alt="" className="h-[100%] p-3" />
        </div>
        <div className="h-[100%] bg-white ">
          <ProductPrice item={item} />
        </div>
        <div className=" absolute top-2 right-2 w-[40px] h-[40px] bg-slate-500 rounded-[10px] flex justify-center items-center">
          <FiHeart size={25} />
        </div>
      </div>
    </>
  );
}
