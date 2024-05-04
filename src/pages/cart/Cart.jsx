//
import { useContext, useEffect } from "react";
import CartDetails from "../../components/cart/CartDetails";
import CartItems from "../../components/cart/CartItems";
import { AppContextSlice } from "../../context/AppContext";
import { ToastContainer } from "react-toastify";

export default function Cart() {
  const { cartArray, handelTotal } = useContext(AppContextSlice);

  useEffect(() => {
    handelTotal();
  }, [cartArray]);

  return (
    <>
      <div className="flex justify-center pt-[50px] pb-[30px] md:mx-[100px] mx-[20px]">
        <div className="flex justify-center lg:flex-row flex-col lg:w-[900px] w-[100%] gap-5">
          <div className="lg:w-[60%] w-[100%] border rounded-[10px] p-5 shadow">
            <CartItems />
          </div>
          <div className="lg:w-[40%] w-[100%] border rounded-[10px] p-5 shadow">
            <CartDetails />
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" theme="colored" />
    </>
  );
}
