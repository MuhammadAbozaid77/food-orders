import ProductPrice from "./ProductPrice";

//
export default function ProductItem({ item, handelSelectProduct }) {
  return (
    <>
      <div className="rounded-[30px]  h-[320px] w-[270px] flex justify-center flex-col overflow-hidden border-gray-400 border-[1px]">
        <div className="min-h-[200px] flex justify-center items-center">
          <img src={item.pic} alt="" className="h-[100%] p-3" />
        </div>
        <div className="h-[100%] font-bold capitalize text-black border">
          <ProductPrice item={item} handelSelectProduct={handelSelectProduct} />
        </div>
      </div>
    </>
  );
}
