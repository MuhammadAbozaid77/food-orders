//
import { Link } from "react-router-dom";
import pic from "../../assets/logo2.png";

export default function OrderItem({ item }) {
  // console.log(item);
  return (
    <>
      <div className="flex gap-5 justify-between items-center border rounded-[20px] overflow-hidden mb-2 shadow cursor-pointer">
        <div className="h-[80px]">
          <img src={pic} alt="" className="h-[100%]" />
        </div>
        <Link to={`/orderdetails/${item?.userId}`} className="w-[70%]">
          <h1 className="text-[16px] font-semibold text-red-500">
            {item.userName}
          </h1>
          <h1 className="text-[20px] font-semibold text-gray-500">
            {item.userLocation}
          </h1>
        </Link>
        <div className="text-[30px] font-semibold text-red-500 py-1 px-3">
          ${item?.total}
        </div>
      </div>
    </>
  );
}
