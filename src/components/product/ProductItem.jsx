import ProductPrice from "./ProductPrice";

export default function ProductItem({ item }) {
  return (
    <>
      <div className="rounded-[20px]  h-[350px] w-[250px] flex justify-center flex-col overflow-hidden border-gray-400 border-[1px]">
        <div className="min-h-[200px] flex justify-center items-center p-3">
          <img src={item.pic} alt="" className="h-[100%] p-3" />
        </div>
        <div className="h-[100%] bg-red-600">
          <ProductPrice item={item} />
        </div>
      </div>
    </>
  );
}
