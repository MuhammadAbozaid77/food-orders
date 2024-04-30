//
// Store Provider   -- Redux
// Routers -- React Router Dom  (Hash Link , Routers)
import { HashRouter } from "react-router-dom";
import AppRouters from "./AppRouters";

export default function AppProviders() {
  return (
    <>
      <HashRouter hashType="hashbang">
        <AppRouters />
      </HashRouter>
    </>
  );
}
