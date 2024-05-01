import { createContext, useState } from "react";

export let AppContextSlice = createContext(0);

export default function AppContextProvider({ children }) {
  const [quantity, setQuantity] = useState("000");

  return (
    <>
      <AppContextSlice.Provider value={{ quantity }}>
        {children}
      </AppContextSlice.Provider>
    </>
  );
}
