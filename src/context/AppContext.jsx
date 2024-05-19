import { createContext, useEffect, useState } from "react";
import { productsJson } from "../assets/categoriesData";
import { toast } from "react-toastify";

export let AppContextSlice = createContext(0);

export default function AppContextProvider({ children }) {
  // -------------------------------------------------------------------------------
  const [showSideBar, setShowSideBar] = useState(false);
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [showWishList, setShowWishList] = useState(false);
  const [showCategory, setShowCategory] = useState("category");
  const [showOpenCheckout, setShowOpenCheckout] = useState(false);
  const [showUserAuth, setShowUserAuth] = useState(false);
  // ---------------------------------- Data Structure -----------------------------------
  const [orderList, setOrderList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("pizza");
  const [productsData, setProductsData] = useState([]);
  const [cartArray, setCartArray] = useState([]);
  const [wishListArray, setWishListArray] = useState([]);
  const [total, setTotal] = useState(0);

  // ---------------------------------- Notifications  -----------------------------------
  const notifySuccess = () => toast.success("New Product Add In Your Order");
  const notifyaddWhishlist = () => toast.success("Product Add To Wishlist");
  const notifyRemoveWhishlist = () =>
    toast.error("Product Remove From Wishlist");
  const notifySuccessOrder = () => toast.success("You Order Is Drived");
  const notifyError = () => toast.error("product Removed from You Order");

  // -------------------------------------------------------------------------------
  const handelShowUserAuth = () => {
    setShowUserAuth((prev) => !prev);
  };
  // -------------------------------------------------------------------------------
  const handelSelectedCat = (args) => {
    const categoryProducts = productsJson?.filter(
      (el) => el?.category === args
    );
    setProductsData(categoryProducts);
  };
  const handelSelectProduct = (args) => {
    // return true or false
    const findObject = cartArray?.find((index) => index.id === args.id);
    if (findObject) {
      setCartArray(
        cartArray?.map((obj) =>
          obj.id === args.id ? { ...obj, quantity: obj.quantity + 1 } : obj
        )
      );
    } else {
      setCartArray((prev) => [...prev, { ...args, quantity: 1 }]);
      notifySuccess();
    }
  };

  // ---------------------------------- Cart Logic -----------------------------------

  const handelIncreaseProduct = (args) => {
    if (args.quantity >= 1) {
      setCartArray(
        cartArray?.map((targetIncease) =>
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
      notifyError();
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

  const handelRemoveProduct = (args) => {
    let cartAfterRemove = cartArray.filter((el) => {
      return el.id !== args.id;
    });
    setCartArray(cartAfterRemove);
    notifyError();
  };

  const handelTotal = () => {
    const totalPrice = cartArray.reduce((total, item) => {
      const itemTotal = item.price * item.quantity;
      // Add the item total to the overall total
      return total + itemTotal;
    }, 0);
    setTotal(totalPrice);
  };

  const handelShowCheckoutModal = () => {
    setShowOpenCheckout((prev) => !prev);
  };

  // ---------------------------------- Order List -----------------------------------
  const handelSubmitOrder = (args) => {
    setOrderList((prev) => [...prev, args]);
    notifySuccessOrder();
    setShowOpenCheckout(false);
  };

  useEffect(() => {
    const orderListData = localStorage.getItem("order-list");
    if (orderListData) {
      setOrderList(JSON.parse(orderListData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("order-list", JSON.stringify(orderList));
    setCartArray([]);
  }, [orderList]);

  // ----------------------------------  Wish List -----------------------------------
  const handelWishList = (args) => {
    const findObj = wishListArray?.find((index) => index.id === args.id);
    if (findObj) {
      setWishListArray(wishListArray?.filter((item) => item.id !== args.id));
      notifyRemoveWhishlist();
    } else {
      setWishListArray([...wishListArray, args]);
      notifyaddWhishlist();
    }
  };

  useEffect(() => {
    const wishList = localStorage.getItem("order-wishlist");
    if (wishList) {
      setWishListArray(JSON.parse(wishList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("order-wishlist", JSON.stringify(wishListArray));
  }, [wishListArray]);

  useEffect(() => {
    if (wishListArray.length > 0) {
      const mergedData = productsData?.map((item) => {
        const wishlistItem = wishListArray?.find((w) => w.id === item.id);
        return wishlistItem
          ? { ...item, isWishListChecked: true }
          : { ...item, isWishListChecked: false };
      });
      setProductsData(mergedData);
    }
  }, [wishListArray]);
  // console.log(productsData);
  // --------------------------------------------------------------------------------------

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
          handelRemoveProduct,
          handelShowUserAuth,
          showUserAuth,
          handelShowCheckoutModal,
          showOpenCheckout,
          handelSubmitOrder,
          orderList,
          showSideBar,
          setShowSideBar,
          setShowSearchPage,
          showSearchPage,
          showWishList,
          setShowWishList,
          handelWishList,
          wishListArray,
        }}
      >
        {children}
      </AppContextSlice.Provider>
    </>
  );
}
