//

import HeaderBottom from "./HeaderBottom";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <header className="relative border-b">
        <div className="flex justify-center items-center h-[80px] bg-red-500 ">
          <Navbar />
        </div>
        <div className="h-[100px] px-[50px] hidden md:flex justify-between items-center ">
          <HeaderBottom />
        </div>
      </header>
    </>
  );
}
