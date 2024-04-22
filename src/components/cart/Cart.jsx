import CartHead from "./CartHead";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

//
export default function Cart() {
  return (
    <>
      <div className="p-5">
        <CartHead />
        <CartItems />
        <CartTotal />
      </div>
    </>
  );
}
