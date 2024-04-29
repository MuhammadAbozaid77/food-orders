//
import { categoriesData } from "./../../assets/categoriesData";
import ProductItem from "./ProductItem";
export default function Product({ productsData, handelSelectProduct }) {
  return (
    <>
      <h1 className="mb-2 font-semibold text-[25px] mt-8">
        Categories Products
      </h1>
      <div className="flex gap-3 flex-wrap lg:justify-start justify-center">
        {productsData?.map((item, index) => (
          <ProductItem
            item={item}
            key={index}
            handelSelectProduct={handelSelectProduct}
          />
        ))}
      </div>
    </>
  );
}
