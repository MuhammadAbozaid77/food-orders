import ProductPrice from "./ProductPrice";

//
export default function ProductItem({ item, handelSelectProduct }) {
  return (
    <>
      <div className="rounded-t-[20px] rounded-b-[10px] border border-gray-400  h-[260px] w-[100%] flex justify-center flex-col overflow-hidden  hover:bg-orange-200 duration-150">
        <div className="min-h-[150px] flex justify-center items-center">
          <img src={item.pic} alt="" className="h-[100%] p-3" />
        </div>
        <div className="h-[100%] bg-orange-400 flex justify-center items-center font-bold capitalize text-gray-100">
          <ProductPrice item={item} handelSelectProduct={handelSelectProduct} />
        </div>
      </div>
    </>
  );
}
