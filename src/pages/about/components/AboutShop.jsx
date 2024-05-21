//
import logo from "../../../assets/logo2.png";
export default function AboutShop() {
  return (
    <>
      <div className="flex justify-center items-center gap-5 w-[100%] md:flex-row flex-col">
        <div className="lg:w-[400px] mmd:w-[350px] md:w-[330px] sm:w-[60%] w-[100%] ">
          <img src={logo} alt="" className="w-[100%] rounded-[10px]" />
        </div>
        <h className="lg:w-[500px] mmd:w-[70%] md:w-[80%] w-[100%] md:p-3 sm:p-4 p-2 mmd:text-[18px] md:text-[16px] text-gray-500 dark:text-gray-400 capitalize">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          explicabo deserunt placeat, voluptatem quasi sint reiciendis quo vel
          possimus aliquid tempore quam, veritatis nisi velit. Aliquam enim
          commodi natus, quaerat incidunt itaque consequuntur rerum placeat
          sequi velit unde iure atque repudiandae aliquid repellendus dolore
          facere maiores explicabo! Enim molestias expedita rerum quo? Dolore
          optio labore quasi assumenda doloribus nulla, delectus vero in id
          illum. Aliquid dolorem culpa labore modi quos nesciunt repellendus
          mollitia nostrum ullam saepe illo nobis voluptate vel nihil itaque
          fugit provident, fugiat quod est, nam facilis suscipit. Hic delectus
          quos consequuntur quidem et possimus reiciendis saepe officiis.
        </h>
      </div>
    </>
  );
}
