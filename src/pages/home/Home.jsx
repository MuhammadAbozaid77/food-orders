// //
import WhatWeAre from "./components/WhatWeAre";
import HomePicSection from "./components/HomePicSection";
import DownloadApp from "./components/DownloadApp";
import HomeCarosel from "./components/HomeCarosel";

import EmailSubscribe from "./components/EmailSubscribe";
import FoodPics from "./components/FoodPics";

export default function Home() {
  return (
    <>
      <div className="mt-[50px]">
        <HomeCarosel />
        <FoodPics />
        <HomePicSection />
        <DownloadApp />
        <WhatWeAre />
        <EmailSubscribe />
      </div>
    </>
  );
}
