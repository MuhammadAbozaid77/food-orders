//
import { categoriesData } from "./../../assets/categoriesData";
import ProductItem from "./ProductItem";
export default function Product() {
  return (
    <>
      <h1 className="mb-2 font-semibold text-[25px] mt-8">
        Categories Products
      </h1>
      <div className="grid xl:grid-cols-6 grid-cols-3 gap-5">
        {categoriesData?.map((item, index) => (
          <ProductItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}
