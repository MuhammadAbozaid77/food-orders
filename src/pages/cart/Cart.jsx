//
import { useContext } from "react";
import CartDetails from "../../components/cart/CartDetails";
import CartItems from "../../components/cart/CartItems";
import { AppContextSlice } from "../../context/AppContext";
// import { MdOutlineDeliveryDining } from "react-icons/md";
// import { FaChevronRight, FaStar } from "react-icons/fa";
//cartArray
export default function Cart() {
  const { handelIncreaseProduct, handelDescreaseProduct } =
  useContext(AppContextSlice);
  return (
    <>
      <div className="flex justify-center my-[50px] mx-[100px]">
        <div className="flex justify-center w-[900px] gap-5">
          <div className="w-[60%] border rounded-[10px] p-5">
            <CartItems />
          </div>
          <div className="w-[40%] border rounded-[10px] p-5">
            <CartDetails />
          </div>
        </div>
      </div>
    </>
  );
}
