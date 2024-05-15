//
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";

export default function Shop() {
  return (
    <>
      <div className="px-[40px] pb-[100px] pt-[30px] border">
        <Category />
        <Product />
      </div>
    </>
  );
}
