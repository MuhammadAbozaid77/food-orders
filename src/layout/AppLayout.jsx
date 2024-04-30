//
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

export default function AppLayout() {
  return (
    <>
      <>
        <Header />
        <main className="min-h-[calc(100vh-80px)]">
          <Outlet />
        </main>
      </>
    </>
  );
}
