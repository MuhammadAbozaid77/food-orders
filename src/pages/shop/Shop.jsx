//
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";
export default function Shop() {
  return (
    <>
      <div className="p-[40px] border">
        <Category />
        <Product />
      </div>
    </>
  );
}
