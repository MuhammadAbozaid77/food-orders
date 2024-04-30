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
    name: "contact us",
    path: "contact",
  },
];
export default function Navbar() {
  return (
    <>
      <ul className="flex justify-center items-center gap-3">
        {navbarLinks.map((el, index) => (
          <Link to={el.path} key={index} className="capitalize text-[18px]">
            {el.name}
          </Link>
        ))}
      </ul>
    </>
  );
}
