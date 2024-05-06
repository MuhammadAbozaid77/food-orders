import { Link } from "react-router-dom";

//
const navbarLinks = [
  {
    name: "home",
    path: "home",
  },
  {
    name: "shop",
    path: "shop",
  },
  {
    name: "orders",
    path: "orders",
  },
  {
    name: "contact us",
    path: "contact",
  },
];
export default function Navbar() {
  return (
    <>
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {navbarLinks.map((el, index) => (
          <li className="block py-2 px-3 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-gray-500 dark:bg-gray-600 md:dark:bg-transparent">
            <Link
              to={el.path}
              key={index}
              className="capitalize text-[18px] font-semibold"
            >
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
