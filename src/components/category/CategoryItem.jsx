//
export default function CategoryItem({ item, setSelectedCategory }) {
  return (
    <>
      <div
        onClick={() => setSelectedCategory(item.name)}
        className="rounded-[20px] border border-gray-400 hover:bg-red-300 duration-150 h-[200px] w-[100%] flex justify-center flex-col overflow-hidden cursor-pointer"
      >
        <div className="min-h-[150px] flex justify-center items-center">
          <img src={item.pic} alt="" className="h-[100%] p-3" />
        </div>
        <div className="h-[100%]  bg-red-500 flex justify-center items-center font-bold capitalize text-gray-100">
          <h3> {item.name} </h3>
        </div>
      </div>
    </>
  );
}
