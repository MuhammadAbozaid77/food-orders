import { createContext, useState } from "react";
import { productsJson } from "../assets/categoriesData";

export let AppContextSlice = createContext(0);

export default function AppContextProvider({ children }) {
  // -------------------------------------------------------------------------------
  const [showCategory, setShowCategory] = useState("category");
  const [selectedCategory, setSelectedCategory] = useState("pizza");
  const [productsData, setProductsData] = useState([]);
  const [cartArray, setCartArray] = useState([]);
  const [total, setTotal] = useState(0);
  // -------------------------------------------------------------------------------
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

  return (
    <>
      <AppContextSlice.Provider
        value={{
          showCategory,
          selectedCategory,
          productsData,
          cartArray,
          total,
          setSelectedCategory,
          handelSelectedCat,
          handelSelectProduct,
          handelIncreaseProduct,
          handelDescreaseProduct,
          handelTotal,
        }}
      >
        {children}
      </AppContextSlice.Provider>
    </>
  );
}
