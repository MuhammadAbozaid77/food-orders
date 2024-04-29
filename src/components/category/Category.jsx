//
import { categoriesData } from "./../../assets/categoriesData";
import CategoryItem from "./CategoryItem";
export default function Category({ setSelectedCategory, selectedCategory }) {
  return (
    <>
      <h1 className="mb-2 font-semibold text-[25px]"> Food Categories</h1>
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
