import { useEffect, useState } from "react";
import Cart from "./components/cart/Cart";
import Category from "./components/category/Category";
import FormPopUp from "./components/formPopUp/FormPopUp";
import Product from "./components/product/Product";
import TableShow from "./components/tableshow/TableShow";
import pic from "./assets/logo.png";
import { productsJson } from "./assets/categoriesData";

//
export default function AppLayout() {
  const [selectedCategory, setSelectedCategory] = useState("pizza");
  const [productsData, setProductsData] = useState([]);
  const handelSelectedCat = (args) => {
    const categoryProducts = productsJson.filter((el) => el?.category === args);
    setProductsData(categoryProducts);
  };
  const [showForm, setShowForm] = useState(false);
  const [cartArray, setCartArray] = useState([]);
  const handelSelectProduct = (args) => {
    setCartArray((prev) => [...prev, { ...args, quantity: 1 }]);
  };

  useEffect(() => {
    handelSelectedCat(selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <div className="min-h-[100vh] w-[100%] flex justify-between relative">
        <div className="w-[100%] bg-white p-[100px]">
          <div className="flex flex-col">
            <div className="flex justify-center mb-10">
              <img src={pic} alt="" className="w-[200px]" />
            </div>
            <h1 className="text-center text-[40px] font-bold mb-[50px]">
              Make Your <span className=" text-orange-500"> Order</span>
            </h1>
          </div>
          <Category setSelectedCategory={setSelectedCategory} />
          <Product
            productsData={productsData}
            handelSelectProduct={handelSelectProduct}
          />
          <TableShow />
        </div>
        <div className="w-[500px] bg-slate-100">
          <Cart setShowForm={setShowForm} cartArray={cartArray} />
        </div>
        {showForm && (
          <div className="absolute inset-0 bg-black/50 flex justify-center pt-[100px]">
            <FormPopUp setShowForm={setShowForm} />
          </div>
        )}
      </div>
    </>
  );
}
