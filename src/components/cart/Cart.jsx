import CartHead from "./CartHead";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

//
export default function Cart({ setShowForm, cartArray }) {
  return (
    <>
      <div className="p-5">
        <CartHead />
        <CartItems cartArray={cartArray} />
        <CartTotal setShowForm={setShowForm} />
      </div>
    </>
  );
}
