//
import { useContext, useEffect } from "react";
import CartDetails from "./components/CartDetails";
import CartItems from "./components/CartItems";
import { AppContextSlice } from "../../context/AppContext";
import noitems from "../../assets/noitems.png";

export default function Cart() {
  const { cartArray, handelTotal } = useContext(AppContextSlice);

  useEffect(() => {
    handelTotal();
  }, [cartArray]);

  return (
    <>
      <div className="flex justify-center pt-[50px] pb-[30px] md:mx-[100px] mx-[20px]">
        {cartArray?.length > 0 ? (
          <>
            <div className="flex justify-center lg:flex-row flex-col lg:w-[900px] w-[100%] gap-5">
              <div className="lg:w-[60%] w-[100%] border rounded-[10px] p-5 shadow">
                <CartItems />
              </div>
              <div className="lg:w-[40%] w-[100%] border rounded-[10px] p-5 shadow">
                <CartDetails />
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center flex-col">
            <div className="h-[300px]">
              <img src={noitems} alt="" className="h-[100%]" />
            </div>
            <div className="flex justify-center items-center">
              <h1 className="md:text-[50px] text-[20px] font-semibold text-gray-600 text-center">
                Your Cart Is Empty
              </h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
