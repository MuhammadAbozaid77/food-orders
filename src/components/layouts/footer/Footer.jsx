import { Link } from "react-router-dom";
import SocialMediaIcons from "./SocialMediaIcons";
import logo from "../../../assets/logo.png";

//
export default function Footer() {
  return (
    <>
      <footer className="bg-gray-200 shadow border dark:bg-gray-800 p-5">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className=" text-gray-500 sm:text-center dark:text-gray-400 text-[18px]">
            © 2023{" "}
            <Link to="/home" className="hover:underline">
              Flowbite™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-[18px] font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link to="/home" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline me-4 md:me-6">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/orders" className="hover:underline me-4 md:me-6">
                Orders
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:underline me-4 md:me-6">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
