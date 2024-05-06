//

import { useContext } from "react";
import OrderItem from "./OrderItem";
import { AppContextSlice } from "../../context/AppContext";
//

export default function Orders() {
  const { orderList } = useContext(AppContextSlice);

  return (
    <>
      <div className="px-[40px] pb-[100px] pt-[30px] flex  justify-center">
        <div className="w-[800px]">
          {orderList?.map((item, index) => (
            <OrderItem item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
