//
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function SocialMediaIcons() {
  return (
    <>
      <div className="flex justify-center items-center gap-5">
        <span className="p-1 text-white cursor-pointer">
          <FaFacebookF size={30} />
        </span>
        <span className="p-1 text-white cursor-pointer">
          <FaInstagram size={30} />
        </span>
        <span className="p-1 text-white cursor-pointer">
          <FaTwitter size={30} />
        </span>
        <span className="p-1 text-white cursor-pointer">
          <FaYoutube size={30} />
        </span>
      </div>
    </>
  );
}
