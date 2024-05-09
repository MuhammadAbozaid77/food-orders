// import pic1 from "../../../assets/logo.png";
// import pic2 from "../../../assets/pic2.png";
import pic3 from "../../../assets/pic3.jpg";

export default function HomeSlider() {
  return (
    <>
      <div className="h-[70vh] w-[100%] px-[100px] border flex justify-center items-center ">
        <div className="w-[100%]">
          <img src={pic3} alt="" className="w-[100%]" />
        </div>
      </div>
    </>
  );
}
