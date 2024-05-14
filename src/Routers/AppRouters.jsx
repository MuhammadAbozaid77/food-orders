//
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "../components/ui/PageNotFound";

//
import AppLayout from "./AppLayout";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import ContactUs from "../pages/contact/ContactUs";
import Cart from "../pages/cart/Cart";
import Orders from "../pages/orders/Orders";
import Location from "../pages/location/Location";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Wishlist from "../pages/wishlist/Wishlist";

//
export default function AppRouters() {
  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="orders" element={<Orders />} />
          <Route path="cart" element={<Cart />} />
          <Route path="location" element={<Location />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </>
  );
}
