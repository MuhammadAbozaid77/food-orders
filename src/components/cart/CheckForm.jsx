//
import { useContext } from "react";
import { useState } from "react";
import { AppContextSlice } from "../../context/AppContext";

export default function CheckForm() {
  const { handelSubmitOrder } = useContext(AppContextSlice);
  const [userName, setUserName] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log(userName, userLocation);
    handelSubmitOrder();
  };
  return (
    <div className="w-[100%] p-3">
      <form onSubmit={handelSubmit} className="w-[100%]">
        <div className="mb-2">
          <label htmlFor="" className="font-semibold text-gray-600">
            UserName
          </label>
          <input
            type="text"
            className="border w-[100%] shadow p-2 rounded-[10px]"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="" className="font-semibold text-gray-600">
            Orders
          </label>
          <div className="border w-[100%] shadow p-2 rounded-[10px] h-[150px]"></div>
        </div>
        <div className="mb-2">
          <label htmlFor="" className="font-semibold text-gray-600">
            Location
          </label>
          <input
            type="text"
            className="border w-[100%] shadow p-2 rounded-[10px]"
            value={userLocation}
            onChange={(e) => setUserLocation(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-[100%] mt-2 bg-transparent duration-150 hover:bg-green-600 text-green-700 shadow text-[20px] font-semibold hover:text-white py-3 px-4 border border-green-500 hover:border-transparent rounded-[10px]"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
}
