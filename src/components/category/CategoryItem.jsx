export default function CategoryItem({
  item,
  setSelectedCategory,
  selectedCategory,
}) {
  return (
    <>
      <div
        onClick={() => setSelectedCategory(item.name)}
        className={` ${
          selectedCategory === item.name
            ? "border-[5px] border-[#c52e10]"
            : "border-gray-400"
        } w-[180px] h-[200px] rounded-[30px] border  hover:bg-gray-200 duration-150  flex justify-center flex-col overflow-hidden cursor-pointer`}
      >
        <div className="min-h-[150px] flex justify-center items-center">
          <img src={item.pic} alt="" className="h-[100%] p-3" />
        </div>
        <div
          className={` ${
            selectedCategory === item.name ? "bg-[#c52e10]" : "bg-[#872815]"
          } h-[100%] flex justify-center items-center font-bold capitalize text-gray-100 text-[22px]   hover:bg-[#c52e10] duration-150`}
        >
          <h3> {item.name} </h3>
        </div>
      </div>
    </>
  );
}
