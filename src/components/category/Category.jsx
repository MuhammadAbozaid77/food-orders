//
import { MdFastfood } from "react-icons/md";
import { categoriesData } from "./../../assets/categoriesData";
import CategoryItem from "./CategoryItem";
export default function Category({ setSelectedCategory, selectedCategory }) {
  return (
    <>
      <div className="flex justify-start gap-3 items-center">
        <span className="text-red-600">
          <MdFastfood size={60} />
        </span>
        <h1 className="mb-2 font-bold text-[40px] my-5 text-gray-700">
          Categories
        </h1>
      </div>
      <div className="flex lg:justify-start justify-center items-center gap-5 flex-wrap">
        {categoriesData?.map((item, index) => (
          <CategoryItem
            item={item}
            key={index}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        ))}
      </div>
    </>
  );
}
