//

import Contacts from "./Contacts";
import ContactEmail from "./ContactEmail";

export default function ContactUs() {
  return (
    <>
      <div className="md:p-[50px] sm:p-[40px] p-[20px] flex">
        <div className="w-[100%]">
          <Contacts />
        </div>
        <div className="w-[100%]">
          <ContactEmail />
        </div>
      </div>
    </>
  );
}
