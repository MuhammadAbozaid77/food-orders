import { useContext, useEffect } from "react";
import CartSection from "./CartSection";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { AppContextSlice } from "../../../context/AppContext";

//

export default function Header() {
  const { cartArray, handelShowUserAuth } = useContext(AppContextSlice);
  useEffect(() => {}, [cartArray]);

  return (
    <>
      <header className="h-[70px] flex justify-between items-center px-10 border-b shadow">
        <Logo />
        <Navbar />
        <CartSection
          cartArray={cartArray}
          handelShowUserAuth={handelShowUserAuth}
        />
      </header>
    </>
  );
}
