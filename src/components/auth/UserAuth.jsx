//
import { IoMdClose } from "react-icons/io";
import { AppContextSlice } from "../../context/AppContext";
import { useContext } from "react";
export default function UserAuth() {
  const { handelShowUserAuth } = useContext(AppContextSlice);

  return (
    <>
      <div className="w-[400px] h-[100vh] bg-white p-3">
        <div
          onClick={handelShowUserAuth}
          className="my-3 hover:border w-[40px] h-[40px] rounded-full hover:bg-gray-200 duration-150 flex justify-center items-center
        "
        >
          <IoMdClose size={30} />
        </div>
      </div>
    </>
  );
}
