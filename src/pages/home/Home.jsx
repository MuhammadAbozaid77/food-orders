//
import WhatWeAre from "../../components/home/WhatWeAre";
import HomePicSection from "../../components/home/HomePicSection";
import DownloadApp from "../../components/home/DownloadApp";
export default function Home() {
  return (
    <>
      <div className="md:p-[50px] p-[20px] flex justify-center items-center flex-col gap-5">
        <HomePicSection />
        <WhatWeAre />
        <DownloadApp />
      </div>
    </>
  );
}
