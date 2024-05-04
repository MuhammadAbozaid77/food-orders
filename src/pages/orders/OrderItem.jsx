//
import pic from "../../assets/logo2.png";

export default function OrderItem() {
  return (
    <>
      <div className="flex justify-between items-center border rounded-[20px] overflow-hidden mb-2 shadow">
        <div className="h-[80px]">
          <img src={pic} alt="" className="h-[100%]" />
        </div>
        <div className="font-semibold flex justify-center items-center gap-1 flex-wrap w-[500px]">
          <span className="border py-1 px-2 rounded-[5px] bg-gray-200">
            <span className="text-[20px]"> 5 </span> Orders Item
          </span>
        </div>
        <div className="text-[30px] font-semibold text-red-500 py-1 px-3">
          $150
        </div>
      </div>
    </>
  );
}
