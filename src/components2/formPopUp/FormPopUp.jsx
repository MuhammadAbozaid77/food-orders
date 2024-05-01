import { useState } from "react";
import PopUpItems from "./PopUpItems";

//
export default function FormPopUp({ setShowForm }) {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerLocation, setCustomerLocation] = useState("");
  //
  const handelSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      customerName,
      customerPhone,
      customerLocation,
    };
    console.log(newOrder);
  };
  return (
    <>
      <form
        className="h-[600px] w-[500px] bg-white/100 rounded-[10px] p-5 flex flex-col"
        onSubmit={handelSubmit}
      >
        <div className="mb-3">
          <label htmlFor="" className="font-semibold">
            Customer Name
          </label>
          <input
            type="text"
            className="border w-[100%] p-2 rounded mt-1"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="font-semibold">
            Customer Phone
          </label>
          <input
            type="phone"
            className="border w-[100%] p-2 rounded mt-1"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
          />
        </div>
        <div className="mb-3 h-[100%]">
          <label htmlFor="" className="font-semibold">
            Items
          </label>
          <div className="border w-[100%] p-2 rounded mt-1 h-[90%]">
            <PopUpItems />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="" className="font-semibold">
            Loaction
          </label>
          <input
            type="text"
            className="border w-[100%] p-2 rounded mt-1"
            value={customerLocation}
            onChange={(e) => setCustomerLocation(e.target.value)}
          />
        </div>
        <div className="h-[100px] p-3">
          <button
            className="border py-2 w-[100px] bg-red-600 text-[20px] text-white rounded-[15px]"
            type="submit"
          >
            Submit
          </button>
          <button
            className="border py-2 w-[100px] bg-black text-[20px] text-white rounded-[15px]"
            onClick={() => setShowForm(false)}
          >
            Close
          </button>
        </div>
      </form>
    </>
  );
}
