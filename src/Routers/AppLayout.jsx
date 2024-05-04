//
import { Outlet } from "react-router-dom";
import Header from "../components/layouts/header/Header";
import Footer from "../components/layouts/footer/Footer";
import UserAuth from "../components/auth/UserAuth";
import { AppContextSlice } from "../context/AppContext";
import { useContext } from "react";
import CheckOut from "../components/cart/CheckOut";

export default function AppLayout() {
  //  handelShowUserAuth,showUserAuth
  const { showUserAuth, handelShowCheckoutModal, showOpenCheckout } =
    useContext(AppContextSlice);

  return (
    <>
      <>
        <div className="relative">
          <Header />
          <main className="min-h-[calc(100vh-80px)]">
            <Outlet />
          </main>
          <Footer />
          {showUserAuth && (
            <div className="absolute inset-0  bg-black/80 flex justify-end">
              <UserAuth />
            </div>
          )}
          {showOpenCheckout && (
            <div
              className="absolute inset-0  bg-black/50 flex justify-center items-center"
              onClick={handelShowCheckoutModal}
            >
              <CheckOut />
            </div>
          )}
        </div>
      </>
    </>
  );
}
