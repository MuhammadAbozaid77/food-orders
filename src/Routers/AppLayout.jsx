//
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/layouts/header/Header";
import Footer from "../components/layouts/footer/Footer";
import UserAuth from "../components/auth/UserAuth";
import { AppContextSlice } from "../context/AppContext";
import { useContext, useEffect } from "react";
import CheckOut from "../pages/cart/components/CheckOut";
import SideBar from "../components/layouts/header/SideBar";
import Search from "../components/search/Search";
import { ToastContainer } from "react-toastify";
import WhishList from "../components/whishList/WhishList";

export default function AppLayout() {
  const { pathname } = useLocation();

  const {
    showUserAuth,
    handelShowCheckoutModal,
    showOpenCheckout,
    showSideBar,
    setShowSideBar,
    setShowSearchPage,
    showSearchPage,
    showWishList,
    setShowWishList,
  } = useContext(AppContextSlice);

  useEffect(() => {
    let indexToRemove = 0;
    let newStr =
      pathname.substring(0, indexToRemove) +
      pathname.substring(indexToRemove + 1);

    document.title = newStr;
  }, [pathname]);

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
              className="fixed inset-0 h-[100vh] bg-black/90 flex justify-center items-center"
              onClick={handelShowCheckoutModal}
            >
              <CheckOut />
            </div>
          )}

          {showSideBar && (
            <div className="fixed inset-0   bg-black/90 flex justify-start h-[100vh] w-[300px] z-[800]">
              <SideBar setShowSideBar={setShowSideBar} />
            </div>
          )}

          <div
            className={`fixed ${
              showSearchPage ? "top-0" : "-top-[100%]"
            } left-0 right-0 bottom-0 bg-white h-[100vh] duration-700 overflow-hidden border-b border-gray-500 shadow z-[1000]`}
          >
            <Search setShowSearchPage={setShowSearchPage} />
          </div>

          <div
            className={`fixed ${
              showWishList ? "top-0" : "-top-[100%]"
            } left-0 right-0 bottom-0 bg-white h-[100vh] duration-700 overflow-hidden border-b border-gray-500 shadow z-[1000]`}
          >
            <WhishList setShowWishList={setShowWishList} />
          </div>

          <div
            className={`fixed ${
              showUserAuth ? "top-0" : "-top-[100%]"
            } left-0 right-0 bottom-0 bg-white h-[100vh] duration-700 overflow-hidden border-b border-gray-500 shadow z-[1000]`}
          >
            <UserAuth />
          </div>
        </div>
      </>
    </>
  );
}
