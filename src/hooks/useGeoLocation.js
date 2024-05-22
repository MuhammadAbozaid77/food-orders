import { useEffect } from "react";
import { useState } from "react";

//  === >  initialstate, Key  === Arguments
//  === >  first, setfirst ===  Hook Extraction
//   Can We Send Callback function In Hook
export function useGeoLocation(initialstate, Key) {
  const [first, setfirst] = useState("0");

  useEffect(() => {
    // console.log("Hello number One-------------------");
  }, [Key, first]);
  return [first, setfirst];
}
