//
export default function FormPopUp() {
  return (
    <>
      <div className="h-[600px] w-[500px] bg-white/100 rounded-[10px] p-5">
        <div className="mb-3">
          <label htmlFor="" className="font-semibold">
            Order Name
          </label>
          <input
            type="text"
            name=""
            id=""
            className="border w-[100%] p-2 rounded mt-1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="font-semibold">
            Loaction
          </label>
          <input
            type="text"
            name=""
            id=""
            className="border w-[100%] p-2 rounded mt-1"
          />
        </div>
      </div>
    </>
  );
}
