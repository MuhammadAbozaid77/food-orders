//
import { FaGooglePlay } from "react-icons/fa6";
import { ImAndroid } from "react-icons/im";

export default function DownloadApp() {
  return (
    <>
      <div className="w-[100%] lg:px-[100px] px-[20px] py-2 mt-[50px] gap-5">
        <div className="bg-green-500 rounded-[20px] md:flex-row flex-col flex justify-between items-center p-5">
          <div className="flex justify-center items-center w-[100%] my-5">
            <div className="w-[100%]">
              <h1 className="md:text-[35px] text-[25px] font-semibold text-gray-800">
                Download
              </h1>
              <h1 className="md:text-[40px] text-[30px] font-semibold text-white">
                Our Mobile App
              </h1>
              <div className="flex justify-start gap-3 mt-[20px]">
                <button className="py-2 px-3 border rounded border-black bg-black text-gray-300 text-[14px] flex justify-center items-center">
                  <ImAndroid size={20} />
                  <span className="mx-1 "> Android </span>
                </button>
                <button className="py-2 px-3 border rounded border-black bg-black text-gray-300 text-[14px] flex justify-center items-center">
                  <FaGooglePlay size={20} />
                  <span className="mx-1">Google Play</span>
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