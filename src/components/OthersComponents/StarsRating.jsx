import { useState } from "react";
import LakeStar from "./LakeStar";
import FullStar from "./FullStar";

//
export default function StarsRating({ maxRating }) {
  const [rating, setRating] = useState(1);
  const [temperorayRating, setTemperorayRating] = useState(0);
  const handelRaing = (args) => {
    setRating(args);
  };
  return (
    <>
      <div className="flex justify-between items-center gap-5 w-[250px] px-2 py-1 rounded-xl border m-5">
        <div className="flex justify-between items-center">
          {Array.from({ length: maxRating }, (_, i) => (
            <Stars
              key={i}
              full={rating >= i + 1}
              onRate={() => handelRaing(i + 1)}
              onHoverIn={() => setTemperorayRating(i + 1)}
              onHoverOut={() => setTemperorayRating(0)}
            />
          ))}
        </div>
        <p> {temperorayRating || "1"} </p>
      </div>
    </>
  );
}

function Stars({ onRate, full, onHoverIn, onHoverOut }) {
  return (
    <>
      <span className="w-[20px]" role="button">
        {full ? (
          <FullStar onRate={onRate} />
        ) : (
          <LakeStar
            onRate={onRate}
            onHoverIn={onHoverIn}
            onHoverOut={onHoverOut}
          />
        )}
      </span>
    </>
  );
}
