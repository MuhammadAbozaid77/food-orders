//
import { TfiClose } from "react-icons/tfi";
import { IoSearch } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";

export default function Search({ setShowSearchPage }) {
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {/* <form>
        <input type="search" />
      </form> */}
      <div className="p-[50px]">
        <div className="flex justify-end items-center">
          <span
            className="border p-2 flex justify-center items-center rounded-full bg-[#ffca3c] hover:bg-[#e6bd4e]  duration-150"
            onClick={() => setShowSearchPage(false)}
          >
            <TfiClose size={20} />
          </span>
        </div>

        <form
          className="flex items-center max-w-sm mx-auto"
          onSubmit={handelSubmit}
        >
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <MdFastfood size={25} />
            </div>
            <input
              type="search"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search a Product"
              required
            />
          </div>
          <button
            type="submit"
            className="p-2 ms-2 text-sm font-medium text-black bg-[#ffca3c] rounded-lg border border-[#ffca3c] hover:bg-[#bd9937] duration-150"
          >
            {/* <IoSearch size={25} /> */}
            Search
          </button>
        </form>
      </div>
    </>
  );
}
