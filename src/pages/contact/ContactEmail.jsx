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
        className="border p-5 border-red-500 rounded-[10px]"
      >
        <div className="grid grid-cols-2 gap-5">
          <div className="p-5">
            <label htmlFor="" className="text-[25px] text-red-700">
              Name
            </label>
            <input
              placeholder="Your Name"
              type="text"
              name=""
              id=""
              className="border w-[100%] rounded-[10px] py-3 px-2 text-[20px] shadow"
            />
          </div>
          <div className="p-5">
            <label htmlFor="" className="text-[25px] text-red-700">
              Location
            </label>
            <input
              placeholder="Your Location"
              type="text"
              name=""
              id=""
              className="border w-[100%] rounded-[10px] py-3 px-2 text-[20px] shadow"
            />
          </div>
          <div className="p-5 col-span-2">
            <label htmlFor="" className="text-[25px] text-red-700">
              Message
            </label>
            <textarea
              placeholder="Your Message"
              name=""
              id=""
              className="border w-[100%] rounded-[10px] py-3 px-2 text-[20px] shadow"
            ></textarea>
          </div>
        </div>

        <button className="mt-[20px] py-3  w-[150px] rounded-[8px] bg-red-700 hover:bg-red-600 duration-150 text-white text-[20px] flex justify-center items-center gap-3">
          <span>
            <BsSendFill />
          </span>
          <span> Send </span>
        </button>
      </form>
    </>
  );
}
