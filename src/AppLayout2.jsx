import { useEffect, useState } from "react";
import Cart from "./components/cart/Cart";
import Category from "./components/category/Category";
import FormPopUp from "./components/formPopUp/FormPopUp";
import Product from "./components/product/Product";
import TableShow from "./components/tableshow/TableShow";
import { productsJson } from "./assets/categoriesData";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function AppLayout() {
  const [showForm, setShowForm] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showCategory, setShowCategory] = useState("category");
  const [selectedCategory, setSelectedCategory] = useState("pizza");
  const [productsData, setProductsData] = useState([]);
  const [cartArray, setCartArray] = useState([]);
  const [total, setTotal] = useState(0);
  //
  const handelSelectedCat = (args) => {
    const categoryProducts = productsJson.filter((el) => el?.category === args);
    setProductsData(categoryProducts);
  };
  const handelSelectProduct = (args) => {
    const findObject = cartArray.find((index) => index.id === args.id);
    if (findObject) {
      setCartArray(
        cartArray.map((obj) =>
          obj.id === args.id ? { ...obj, quantity: obj.quantity + 1 } : obj
        )
      );
    } else {
      setCartArray((prev) => [...prev, { ...args, quantity: 1 }]);
    }
  };
  const handelIncreaseProduct = (args) => {
    if (args.quantity >= 1) {
      setCartArray(
        cartArray.map((targetIncease) =>
          targetIncease.id === args.id
            ? { ...targetIncease, quantity: targetIncease.quantity + 1 }
            : targetIncease
        )
      );
    }
  };
  const handelDescreaseProduct = (args) => {
    if (args.quantity === 1) {
      setCartArray(
        cartArray.filter((targetIncease) => targetIncease.id !== args.id)
      );
    }
    if (args.quantity > 1) {
      setCartArray(
        cartArray.map((targetIncease) =>
          targetIncease.id === args.id
            ? { ...targetIncease, quantity: targetIncease.quantity - 1 }
            : targetIncease
        )
      );
    }
  };

  const handelTotal = () => {
    const totalPrice = cartArray.reduce((total, item) => {
      const itemTotal = item.price * item.quantity;
      // Add the item total to the overall total
      return total + itemTotal;
    }, 0);
    setTotal(totalPrice);
  };

  const handelShowNavbar = (args) => {
    setShowCategory(args);
  };

  useEffect(() => {
    handelSelectedCat(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    handelTotal();
  }, [cartArray]);

  return (
    <>
      <div className="min-h-[100vh] w-[100%] flex justify-between relative">
        <div className="w-[100%] bg-white lg:px-[80px] lg:pt-[40px] px-[20px]">
          <Header
            total={total}
            cartArray={cartArray?.length}
            handelShowNavbar={handelShowNavbar}
            setShowCart={setShowCart}
          />
          {showCategory === "category" && (
            <>
              <Category
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
              <Product
                productsData={productsData}
                handelSelectProduct={handelSelectProduct}
              />
            </>
          )}

          {showCategory === "orders" && (
            <>
              <TableShow />
            </>
          )}
          <Footer />
        </div>
        {showCart && (
          <div className="w-[500px] bg-slate-100 fixed right-0 bottom-0 top-0 border-slate-300 border-[3px]">
            <Cart
              setShowForm={setShowForm}
              cartArray={cartArray}
              handelIncreaseProduct={handelIncreaseProduct}
              handelDescreaseProduct={handelDescreaseProduct}
              total={total}
              setShowCart={setShowCart}
            />
          </div>
        )}
        {/* {showForm && (
          <div className="absolute inset-0 bg-black/50 flex justify-center pt-[100px]">
            <FormPopUp setShowForm={setShowForm} />
          </div>
        )} */}
      </div>
    </>
  );
}
