//
// Store Provider   -- Redux
// Routers -- React Router Dom  (Hash Link , Routers)
import { HashRouter } from "react-router-dom";
import AppRouters from "./AppRouters";
import { onAuthStateChanged } from "firebase/auth";
import { appAuth } from "../data/firebase-config";
import { AppContextSlice } from "../context/AppContext";
import { useContext } from "react";

export default function AppProviders() {
  const { setuserData } = useContext(AppContextSlice);

  onAuthStateChanged(appAuth, async (currentuser) => {
    setuserData(currentuser?.email);
  });

  return (
    <>
      <HashRouter hashType="hashbang">
        <AppRouters />
      </HashRouter>
    </>
  );
}
