import ProductPrice from "./ProductPrice";

//
export default function ProductItem({ item }) {
  return (
    <>
      <div className="rounded-[20px] border border-gray-400 bg-orange-100 h-[220px] w-[100%] flex justify-center flex-col overflow-hidden  hover:bg-orange-200 duration-150">
        <div className="min-h-[150px] flex justify-center items-center">
          <img src={item.pic} alt="" className="h-[100%] p-3" />
        </div>
        <div className="h-[100%] bg-orange-500 flex justify-center items-center font-bold capitalize text-gray-100">
          <ProductPrice item={item} />
        </div>
      </div>
    </>
  );
}