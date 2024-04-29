import CartHead from "./CartHead";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

//
export default function Cart({
  setShowForm,
  cartArray,
  handelIncreaseProduct,
  handelDescreaseProduct,
  total,
}) {
  return (
    <>
      <div className="p-5">
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
