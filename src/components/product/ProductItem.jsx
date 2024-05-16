import ProductPrice from "./ProductPrice";

export default function ProductItem({ item }) {
  return (
    <>
      <div className="rounded-[10px] shadow-lg  h-[380px] lg:w-[260px] md:w-[250px] w-[280px] flex justify-center flex-col overflow-hidden border">
        <div className="min-h-[250px] flex justify-center items-center p-3">
          <img src={item.pic} alt="" className="h-[100%] border bg-slate-200" />
        </div>
        <div className="h-[100%] bg-white">
          <ProductPrice item={item} />
        </div>
      </div>
    </>
  );
}
