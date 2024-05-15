//
export default function OrderDetailsRight({ data }) {
  return (
    <>
      <div className="w-[100%] p-5 border shadow-lg">
        {data?.map((item, index) => (
          <div
            className="flex justify-start gap-5 items-center md:flex-row  mb-[10px]"
            key={index}
          >
            <div className="h-[80px] ">
              <img
                src={item?.pic}
                alt=""
                className="rounded-[10px] h-[100%] border p-1 shadow"
              />
            </div>
            <div className="w-[80px] h-[80px]  border flex justify-center items-center text-[50px] rounded bg-green-500 text-white">
              {item?.quantity}
            </div>
            <div>
              <h1 className="sm:text-[25px] text-[18px] text-gray-500 capitalize">
                {item?.name}
              </h1>
              <h1 className="text-[20px] text-red-500"> $ {item?.price} </h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
