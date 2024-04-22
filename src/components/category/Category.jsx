//
import { categoriesData } from "./../../assets/categoriesData";
import CategoryItem from "./CategoryItem";
export default function Category() {
  return (
    <>
      <h1 className="mb-2 font-semibold text-[25px]"> Food Categories</h1>
      <div className="grid xl:grid-cols-6 grid-cols-4 gap-5">
        {categoriesData?.map((item, index) => (
          <CategoryItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}
