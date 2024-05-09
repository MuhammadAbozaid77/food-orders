//
export default function Header() {
  return (
    <>
      <header className="relative border bg-slate-200 py-[30px]">
        <div className="flex justify-center items-center bg-[#222222] ">
          <div className="border bg-slate-400 flex justify-between items-center p-[10px] w-[900px] relative">
            <ul className="border flex justify-start items-center gap-5">
              <li> Home </li>
              <li> About </li>
              <li> Menu </li>
            </ul>
            <ul className="border flex justify-start items-center gap-5">
              <li> Orders </li>
              <li> Location </li>
              <li> Contact </li>
            </ul>
            <div className="absolute w-[200px] h-[200px] bg-red-500  -top-[15px] left-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </header>
    </>
  );
}

// import { useContext, useEffect } from "react";
// import CartSection from "./CartSection";
// import Logo from "./Logo";
// import Navbar from "./Navbar";
// import { AppContextSlice } from "../../../context/AppContext";

// //

// export default function Header() {
//   const { cartArray, handelShowUserAuth } = useContext(AppContextSlice);
//   useEffect(() => {}, [cartArray]);

//   return (
//     <>
//       <header className="h-[70px] flex justify-between items-center px-10 border-b shadow">
//         <Logo />
//         <Navbar />
//         <CartSection
//           cartArray={cartArray}
//           handelShowUserAuth={handelShowUserAuth}
//         />
//       </header>
//     </>
//   );
// }
