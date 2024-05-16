//
import { FaGooglePlay } from "react-icons/fa6";
import { ImAndroid } from "react-icons/im";

export default function DownloadApp() {
  return (
    <>
      <div className="w-[100%] lg:px-[100px] px-[20px] mt-[50px] gap-5 bg-green-500 py-[50px]">
        <div className="bg-green-500 rounded-[15px] md:flex-row flex-col gap-5 flex justify-between items-center py-5 px-[50px] shadow-2xl border-t border-green-400">
          <div className="flex justify-center items-center w-[100%] my-5">
            <div className="w-[100%]">
              <div className="sm:block flex flex-col justify-center items-center">
                <h1 className="md:text-[35px] text-[30px] font-semibold text-gray-800 block leading-[25px]">
                  Download
                </h1>
                <span className="md:text-[40px] text-[30px] font-semibold text-white">
                  Our Mobile App
                </span>
              </div>
              <div className="flex md:justify-start  items-center gap-3 mt-[20px] sm:flex-row flex-col">
                <button className="py-3 px-3 w-[200px] border rounded border-black bg-black text-gray-300 text-[14px] flex justify-center items-center">
                  <ImAndroid size={30} />
                  <span className="mx-2 text-[20px]"> Android </span>
                </button>
                <button className="py-3 px-3 w-[200px] border rounded border-black bg-black text-gray-300 text-[14px] flex justify-center items-center">
                  <FaGooglePlay size={30} />
                  <span className="mx-2 text-[20px]">Google Play</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[100%]">
            <p className="text-[18px] text-gray-50">
              A mobile application or app is a computer program or software
              application designed to run on a mobile device such as a phone,
              tablet, or watch. A mobile application or app is a computer
              program or software application designed to run on a mobile device
              such as a phone, tablet, or watch.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
