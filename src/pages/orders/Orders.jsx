import { useContext, useState } from "react";
import OrderItem from "./OrderItem";
import { AppContextSlice } from "../../context/AppContext";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

export default function Orders() {
  const { orderList } = useContext(AppContextSlice);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // You can change this value to set the number of items per page

  // Calculate total pages
  const totalPages = Math.ceil(orderList.length / itemsPerPage);

  // Get current items for the page
  const currentItems = orderList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers for next and previous buttons
  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <>
      <div className="px-[40px] pb-[50px] pt-[30px] flex justify-center">
        <div className="w-[800px]">
          {currentItems.map((item, index) => (
            <OrderItem item={item} key={index} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="border p-3 bg-red-600 text-white rounded-md"
        >
          <MdOutlineArrowBackIos size={25} />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            disabled={index + 1 === currentPage}
            className="mx-1 p-3 border rounded w-[50px] text-[18px] shadow-md border-gray-400 disabled:bg-white bg-gray-500"
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="border p-3 bg-red-600 text-white rounded-md"
        >
          <MdOutlineArrowForwardIos size={25} />
        </button>
      </div>
    </>
  );
}
