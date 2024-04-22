import Cart from "./components/cart/Cart";
import Category from "./components/category/Category";
import FormPopUp from "./components/formPopUp/FormPopUp";
import Product from "./components/product/Product";
import TableShow from "./components/tableshow/TableShow";

//
export default function AppLayout() {
  return (
    <>
      <div className="min-h-[100vh] w-[100%] flex justify-between relative">
        <div className="w-[100%] bg-slate-200 p-[100px]">
          <h1 className="text-center text-[40px] font-bold mb-[50px]">
            Make Your <span className=" text-orange-500"> Order</span>
          </h1>
          <Category />
          <Product />
          <TableShow />
        </div>
        <div className="w-[600px] bg-slate-100">
          <Cart />
        </div>
        <div className="absolute inset-0 bg-black/50 flex justify-center pt-[100px]">
          <FormPopUp />
        </div>
      </div>
    </>
  );
}
