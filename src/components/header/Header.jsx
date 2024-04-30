import CartSection from "./CartSection";
import Logo from "./Logo";
import Navbar from "./Navbar";

//
export default function Header() {
  return (
    <>
      <header className="h-[80px] flex justify-between items-center px-10 border-b">
        <Logo />
        <Navbar />
        <CartSection />
      </header>
    </>
  );
}
