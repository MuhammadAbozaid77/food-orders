//

import Contacts from "./Contacts";
import ContactEmail from "./ContactEmail";

export default function ContactUs() {
  return (
    <>
      <div className="md:p-[50px] sm:p-[40px] p-[20px]">
        <div>
          <Contacts />
        </div>
        <div>
          <ContactEmail />
        </div>
      </div>
    </>
  );
}
