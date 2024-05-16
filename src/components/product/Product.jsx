//
import ProductItem from "./ProductItem";
import { MdFastfood } from "react-icons/md";
import { useContext, useEffect } from "react";
import { AppContextSlice } from "../../context/AppContext";

export default function Product() {
  const { productsData, handelSelectedCat, selectedCategory } =
    useContext(AppContextSlice);
  useEffect(() => {
    handelSelectedCat(selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <div className="flex justify-start gap-3 items-center border-t mt-[50px] pt-[30px] border-gray-300">
        <span className="text-red-600 sm:text-[80px] text-[45px]">
          <MdFastfood />
        </span>
        <h1 className="mb-2 font-bold sm:text-[40px] text-[30px]  my-5 text-gray-700">
          Products
        </h1>
      </div>
      <div className="flex gap-3 flex-wrap lg:justify-start justify-center mt-[30px]">
        {productsData?.map((item, index) => (
          <ProductItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}
