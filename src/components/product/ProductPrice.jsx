//
export default function ProductPrice({ item, handelSelectProduct }) {
  return (
    <>
      <div className="flex items-center justify-between w-[100%] p-3 flex-col bg-gray-300 h-[100%] ">
        <h1 className="text-[22px] text-black"> {item.name} </h1>
        <div className="w-[100%] flex  justify-center items-center h-[50px] gap-5">
          <button
            onClick={() => handelSelectProduct(item)}
            className="rounded-[10px] bg-[#872815] hover:bg-[#c52e10] duration-150 text-white cursor-pointer py-2 px-5"
          >
            Add To Cart
          </button>
          <span className="text-[30px] text-black"> $ {item.price} </span>
        </div>
      </div>
    </>
  );
}
