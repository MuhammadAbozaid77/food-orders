//
import WishListItem from "./WishListItem";
import { BsFillBox2HeartFill } from "react-icons/bs";

export default function WishListProducts({ data, handelWishList }) {
  return (
    <>
      {data?.length === 0 ? (
        <>
          <div className="lg:w-[850px] w-[100%]  mt-[50px] flex justify-center items-center flex-col">
            <span className="text-gray-300 ">
              <BsFillBox2HeartFill size={100} />
            </span>
            <h1 className="text-[20px] mt-[10px] text-gray-500">
              No Items Founded
            </h1>
          </div>
        </>
      ) : (
        <div className="lg:w-[850px] w-[100%] mt-[50px] grid md:grid-cols-2  grid-cols-1 gap-2  ">
          {data?.map((item, index) => (
            <WishListItem
              item={item}
              key={index}
              handelWishList={handelWishList}
            />
          ))}
        </div>
      )}
    </>
  );
}
