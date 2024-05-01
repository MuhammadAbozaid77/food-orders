import { useContext } from "react";
import WhyChooseUs from "../../components/e-Commerce/WhyChooseUs";
import { AppContextSlice } from "../../context/AppContext";

//

export default function Home() {
  const data = useContext(AppContextSlice);
  console.log(data);
  return (
    <>
      <div>
        <h1> {data.quantity}</h1>
        <WhyChooseUs />
      </div>
    </>
  );
}
