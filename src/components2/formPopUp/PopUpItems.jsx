//
export default function PopUpItems() {
  return (
    <>
      <div className="flex justify-between gap-2 mb-2">
        <span className="h-[35px] border p-1 rounded w-[100%] flex items-center justify-start bg-orange-500 text-white text-[20px]">
          Pizza
        </span>
        <span className="h-[35px] border p-1 rounded w-[50px] flex justify-center items-center bg-black text-white text-[20px]">
          5
        </span>
        <span className="h-[35px] border p-1 rounded w-[50px] flex justify-center items-center bg-red-600 text-white text-[20px] cursor-pointer">
          X
        </span>
      </div>
    </>
  );
}
