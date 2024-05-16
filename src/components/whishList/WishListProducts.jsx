import WishListItem from "./WishListItem";

//
export default function WishListProducts({ data }) {
  return (
    <>
      <div className="lg:w-[850px] w-[100%] mt-[50px] grid md:grid-cols-2  grid-cols-1 gap-2  overflow-y-scroll">
        {data?.map((item, index) => (
          <WishListItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}
