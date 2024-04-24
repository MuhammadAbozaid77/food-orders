//
//
import { useState } from "react";
import NewCart from "./NewCart";
import NewProducts from "./NewProducts";

export default function NewShoppingCart() {
  const [cart, setCart] = useState([]);
  //
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };
  //
  const increaseQuantity = (product) => {
    setCart(
      cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  //
  const decreaseQuantity = (product) => {
    setCart(
      cart.map((item) =>
        item.product.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  //
  const removeProduct = (product) => {
    setCart(cart.filter((item) => item.product.id !== product.id));
  };

  const products = [
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 20 },
    { id: 3, name: "Product C", price: 30 },
  ];
  //

  return (
    <>
      <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        {products.map((product) => (
          <NewProducts
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
        <NewCart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeProduct={removeProduct}
        />
      </div>
    </>
  );
}
