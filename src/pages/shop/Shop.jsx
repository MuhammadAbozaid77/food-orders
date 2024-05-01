import { useContext } from "react";
import { AppContextSlice } from "../../context/AppContext";

//
export default function Shop() {
  const data = useContext(AppContextSlice);

  return <div>{data.quantity}</div>;
}
