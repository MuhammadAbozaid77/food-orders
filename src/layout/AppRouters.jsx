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
        </Route>
      </Routes>
    </>
  );
}
