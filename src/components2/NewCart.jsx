//
export default function NewCart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
}) {
  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    );
  };

  return (
    <div className="mt-6 p-4 bg-gray-100 shadow rounded">
      <h3 className="text-xl font-bold mb-4">Shopping Cart</h3>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center mb-4 p-2 bg-white rounded"
            >
              <span className="flex items-center">
                {item.product.name} - {item.quantity} x $
                {item.product.price.toFixed(2)}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => increaseQuantity(item.product)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                >
                  +
                </button>
                <button
                  onClick={() => decreaseQuantity(item.product)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  -
                </button>
                <button
                  onClick={() => removeProduct(item.product)}
                  className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h4 className="text-lg font-semibold">
            Total: ${calculateTotal().toFixed(2)}
          </h4>
        </>
      )}
    </div>
  );
}
