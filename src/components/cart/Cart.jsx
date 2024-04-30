//
import CartHead from "./CartHead";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import { FiChevronsRight } from "react-icons/fi";

//
export default function Cart({
  setShowForm,
  cartArray,
  handelIncreaseProduct,
  handelDescreaseProduct,
  total,
  setShowCart,
}) {
  return (
    <>
      <div className="p-5">
        <div
          onClick={() => setShowCart(false)}
          className="w-[50px] h-[50px] hover:bg-black text-white cursor-pointer bg-[#c52e10]  rounded-full my-5 flex justify-center items-center"
        >
          <FiChevronsRight size={30} />
        </div>
        <CartHead />
        <CartItems
          cartArray={cartArray}
          handelIncreaseProduct={handelIncreaseProduct}
          handelDescreaseProduct={handelDescreaseProduct}
        />
        <CartTotal setShowForm={setShowForm} total={total} />
      </div>
    </>
  );
}
