// //
import WhatWeAre from "./components/WhatWeAre";
import HomePicSection from "./components/HomePicSection";
import DownloadApp from "./components/DownloadApp";

import EmailSubscribe from "./components/EmailSubscribe";

// import HomeSlider from "./components/home/HomeSlider";
export default function Home() {
  return (
    <>
      <div className="mt-[300px]">
        <HomePicSection />
        <DownloadApp />
        <WhatWeAre />
        <EmailSubscribe />
      </div>
    </>
  );
}
