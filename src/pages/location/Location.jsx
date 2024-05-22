import { useGeoLocation } from "../../hooks/useGeoLocation";

//
export default function Location() {
  const [first, setfirst] = useGeoLocation("muhammad", "Zidan");
  return (
    <>
      <div className="p-10">
        <h1> Location</h1>
        <button
          className="border p-2 shadow-lg w-[100px] bg-blue-500 text-white text-[20px] capitalize rounded-[10px]"
          onClick={setfirst("New Click")}
        >
          click
        </button>
      </div>
    </>
  );
}
