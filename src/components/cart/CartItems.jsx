//
import pic from "./../../assets/pics/Chili_dog_with_fries.jpg";
export default function CartItems() {
  return (
    <>
      <div className="flex items-center my-8">
        <div className="w-[100%] flex  justify-between items-center">
          <div className="h-[70px] ">
            <img src={pic} alt="" className="h-[100%] rounded-lg" />
          </div>
          <div className="h-[70px] w-[200px] flex justify-center flex-col mx-2">
            <h6 className="font-semibold"> Special Hot Dog </h6>
            <h1 className="text-orange-500 font-bold text-[20px]"> $ 25 </h1>
          </div>
        </div>

        <div className="w-[120px] h-[70px] flex justify-between items-center">
          <span className="cursor-pointer w-[30px] h-[30px] border p-1 flex justify-center items-center bg-black text-white rounded">
            -
          </span>
          <span className="w-[30px] h-[30px] mx-2 p-1 flex justify-center items-center text-[20px]">
            1
          </span>
          <span className="cursor-pointer w-[30px] h-[30px] border p-1 flex justify-center items-center bg-orange-600 text-white rounded">
            +
          </span>
        </div>
      </div>
    </>
  );
}
