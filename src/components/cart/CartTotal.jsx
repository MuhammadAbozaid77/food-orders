//
export default function CartTotal() {
  return (
    <>
      <div className="flex justify-between items-center px-5">
        <span className="font-bold">Total</span>
        <span className="font-bold text-[25px] text-orange-600">$144</span>
      </div>
      <div className="my-5 flex justify-center">
        <button className="w-[100%] bg-slate-800 text-white p-2 rounded-lg text-[20px]">
          CheckOut
        </button>
      </div>
    </>
  );
}
