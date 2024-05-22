//
import { BsSendFill } from "react-icons/bs";

export default function ContactEmail() {
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        onSubmit={handelSubmit}
        className="border p-5 shadow-lg rounded-[10px] w-[500px]"
      >
        <div className="m-5 flex justify-center items-center">
          <h1 className="text-[25px] font-semibold text-red-600">Sending Message</h1>
        </div>
        <div className=" gap-2">
          <div className="p-2">
            <label
              htmlFor=""
              className="text-[20px] text-gray-600 font-semibold"
            >
              Name
            </label>
            <input
              placeholder="Your Name"
              type="text"
              name=""
              id=""
              className="border w-[100%] rounded-[5px] py-2 px-2 text-[18px] shadow"
            />
          </div>
          <div className="p-2">
            <label
              htmlFor=""
              className="text-[20px] text-gray-600 font-semibold"
            >
              Location
            </label>
            <input
              placeholder="Your Location"
              type="text"
              name=""
              id=""
              className="border w-[100%] rounded-[5px] py-2 px-2 text-[18px] shadow"
            />
          </div>
          <div className="p-2">
            <label
              htmlFor=""
              className="text-[20px] text-gray-600 font-semibold"
            >
              Location
            </label>
            <input
              placeholder="Your Location"
              type="text"
              name=""
              id=""
              className="border w-[100%] rounded-[5px] py-2 px-2 text-[18px] shadow"
            />
          </div>
          <div className="p-2">
            <label
              htmlFor=""
              className="text-[20px] text-gray-600 font-semibold"
            >
              Message
            </label>
            <textarea
              placeholder="Your Message"
              name=""
              id=""
              className="border w-[100%] rounded-[5px] py-2 px-2 text-[18px] shadow"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="mt-[20px] py-3  w-[100%] rounded-[5px] bg-red-700 hover:bg-red-600 duration-150 text-white text-[20px] flex justify-center items-center gap-3">
            <span>
              <BsSendFill />
            </span>
            <span> Send </span>
          </button>
        </div>
      </form>
    </>
  );
}
