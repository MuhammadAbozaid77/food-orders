//
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";
import { ToastContainer } from "react-toastify";

export default function Shop() {
  return (
    <>
      <div className="px-[40px] pb-[100px] pt-[30px] border">
        <Category />
        <Product />
      </div>
      <ToastContainer position="top-right" theme="colored" />
    </>
  );
}
