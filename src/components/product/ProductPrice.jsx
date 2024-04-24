//
export default function ProductPrice({ item }) {
  return (
    <>
      <div className="flex justify-between items-center w-[100%] px-3 flex-col gap-5">
        <div className="flex justify-between items-center w-[100%]">
          <h1 className="text-[16px] text-black"> {item.name} </h1>
          <h1 className="text-[20px]"> $55 </h1>
        </div>
        <div className="w-[100%] border flex  justify-center items-center rounded-[15px] bg-orange-300 text-black cursor-pointer h-[40px]">
          <button> Add To Order </button>
        </div>
      </div>
    </>
  );
}
