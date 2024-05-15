import ProductItem from "../product/ProductItem";

//
export default function SearchProduct({ data }) {
  // console.log(data);
  return (
    <>
      <div className="flex gap-3 flex-wrap lg:justify-start justify-center mt-[50px]">
        {data?.map((item, index) => (
          <ProductItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}
