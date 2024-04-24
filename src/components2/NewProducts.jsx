//
export default function NewProducts({ product, addToCart }) {
  // const handleAdd = () => {
  //   addToCart(product);
  // };
  return (
    <div className="p-4 bg-white shadow rounded mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">Price: ${product.price.toFixed(2)}</p>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
