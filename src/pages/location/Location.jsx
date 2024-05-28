import { motion } from "framer-motion";
import { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
//
import { HiMiniCodeBracketSquare } from "react-icons/hi2";

export default function Location() {
  const [isLoading, setIsLoading] = useState(false);
  const [countClicks, setCountClicks] = useState(0);
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const { lat, lng } = position;

  function getPosition() {
    setCountClicks((count) => count + 1);

    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return (
    <>
      {/* <div className="p-10">
        <div>
          <button
            onClick={getPosition}
            disabled={isLoading}
            className="border p-2 bg-green-600 rounded-[5px] text-white capitalize font-semibold"
          >
            <FaSearchLocation />
            Get my Location
          </button>

          {isLoading && <p>Loading position...</p>}
          {error && <p>{error}</p>}
          {!isLoading && !error && lat && lng && (
            <p>
              Your GPS position:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
              >
                {lat}, {lng}
              </a>
            </p>
          )}

          <p>You requested position {countClicks} times</p>
        </div>
      </div> */}
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="flex justify-center items-center p-10 h-[600px]"
      >
        <h1 className="flex justify-center items-center flex-col">
          <span className="text-green-500 md:text-[120px] text-[80px]">
            <HiMiniCodeBracketSquare />
          </span>
          <span className="md:text-[40px] text-[20px]  text-gray-500 font-semibold text-center">
            Page Under Development
          </span>
        </h1>
      </motion.div>
    </>
  );
}
