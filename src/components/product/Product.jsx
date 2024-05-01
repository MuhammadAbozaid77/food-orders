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
      <div className="flex justify-start gap-3 items-center mt-10">
        <span className="text-red-600">
          <MdFastfood size={60} />
        </span>
        <h1 className="mb-2 font-bold text-[40px] my-5 text-gray-700">
          Products
        </h1>
      </div>
      <div className="flex gap-3 flex-wrap lg:justify-start justify-center">
        {productsData?.map((item, index) => (
          <ProductItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}
