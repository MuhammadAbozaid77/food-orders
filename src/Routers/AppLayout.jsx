//
import { Outlet } from "react-router-dom";
import Header from "../components/layouts/header/Header";
import Footer from "../components/layouts/footer/Footer";
import UserAuth from "../components/auth/UserAuth";
import { AppContextSlice } from "../context/AppContext";
import { useContext } from "react";
import CheckOut from "../pages/cart/components/CheckOut";
import SideBar from "../components/layouts/header/SideBar";
import Search from "../components/search/Search";
import { ToastContainer } from "react-toastify";

export default function AppLayout() {
  const {
    showUserAuth,
    handelShowCheckoutModal,
    showOpenCheckout,
    handelShowUserAuth,
    showSideBar,
    setShowSideBar,
    setShowSearchPage,
    showSearchPage,
  } = useContext(AppContextSlice);

  return (
    <>
      <>
        <ToastContainer position="top-center" theme="colored" />

        <div className="relative">
          <Header />
          <main className="min-h-[calc(100vh-80px)] relative">
            <Outlet />
          </main>
          <Footer />

          {showOpenCheckout && (
            <div
              className="absolute inset-0  bg-black/80 flex justify-center items-center"
              onClick={handelShowCheckoutModal}
            >
              <CheckOut />
            </div>
          )}
          {showUserAuth && (
            <div
              className="fixed inset-0  bg-black/80 flex justify-end h-[100vh]"
              onClick={handelShowUserAuth}
            >
              <UserAuth />
            </div>
          )}

          {showSideBar && (
            <div className="fixed inset-0   bg-black/90 flex justify-start h-[100vh] w-[300px]">
              <SideBar setShowSideBar={setShowSideBar} />
            </div>
          )}
          <div
            className={`fixed ${
              showSearchPage ? "top-0" : "-top-[100%]"
            } left-0 right-0 bottom-0 bg-white h-[100vh] duration-700 overflow-hidden border-b border-gray-500 shadow`}
          >
            <Search setShowSearchPage={setShowSearchPage} />
          </div>
        </div>
      </>
    </>
  );
}
