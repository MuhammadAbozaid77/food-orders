//
export default function ProductPrice({ item }) {
  return (
    <>
      <div className="flex justify-between items-center w-[100%] px-3">
        <div className="">
          <h1 className="text-[16px] text-black"> {item.name} </h1>
          <h1 className="text-[20px]"> $55 </h1>
        </div>
        <div className="w-[30px] border flex  justify-center items-center rounded bg-white text-red-500 cursor-pointer">
          <button> + </button>
        </div>
      </div>
    </>
  );
}
